/* eslint-disable import/prefer-default-export */
import { from, Observable, of, Subscription } from 'rxjs'
import { concat, filter, map, mergeMap, reduce } from 'rxjs/operators'

import {
  EXPORT_DEFAULT_COMPONENT_FROM_DIR,
  EXPORT_DIST,
  ICON_IDENTIFIER,
  ICON_JSON,
} from './constants'
import renderIconDefinitionToSVGElement from './templates/helpers'
import {
  BuildTimeIconMetaData,
  Environment,
  IconDefinition,
  NameAndPath,
  Node,
  WriteFileMetaData,
} from './typings'
import { clear, generateAbstractTree, isAccessable, log } from './utils'

import globby = require('globby')

import fs = require('fs-extra')
import _ = require('lodash')
import parse5 = require('parse5')
import path = require('path')
import Prettier = require('prettier')

import SVGO = require('svgo')

async function svgFileNames(env: Environment) {
  const dir = path.join(env.paths.SVG_DIR)
  log.notice(`Read svg from ${dir}`)

  const listNames = _.uniq(
    _.flatten(
      await globby(['*.svg'], {
        cwd: env.paths.SVG_DIR,
        deep: false,
      }),
    ),
  ).map(name => name.replace(/\.svg$/, ''))
  return listNames
}

export async function build(env: Environment) {
  const svgo = new SVGO(env.options.svgo)
  const svgoForSingleIcon = new SVGO({
    ...env.options.svgo,
    plugins: [
      ...env.options.svgo.plugins!,
      { removeAttrs: { attrs: ['fill', 'fill-rule'] } },
    ],
  })

  await clear(env)

  const svgBasicNames = await svgFileNames(env)

  // SVG Meta Data Flow
  const svgMetaDataWithTheme$ = from(svgBasicNames).pipe(
    map<string, NameAndPath>(kebabCaseName => {
      const identifier = _.upperFirst(_.camelCase(kebabCaseName))
      return { kebabCaseName, identifier }
    }),
    filter(({ kebabCaseName }) =>
      isAccessable(path.resolve(env.paths.SVG_DIR, `${kebabCaseName}.svg`)),
    ),
    mergeMap<NameAndPath, any>(async ({ kebabCaseName, identifier }: any) => {
      const tryUrl = path.resolve(env.paths.SVG_DIR, `${kebabCaseName}.svg`)
      let optimizer = svgo
      optimizer = svgoForSingleIcon
      const { data } = await optimizer.optimize(
        await fs.readFile(tryUrl, 'utf8'),
      )
      const icon: IconDefinition = {
        name: kebabCaseName,
        icon: {
          ...generateAbstractTree(
            (parse5.parseFragment(data) as any).childNodes[0] as Node,
            kebabCaseName,
          ),
        },
      }
      return { identifier, icon }
    }),
    map<any, Observable<BuildTimeIconMetaData>>(item => of(item)),
  )

  // Nomalized build time icon meta data
  const BuildTimeIconMetaData$ = svgMetaDataWithTheme$.pipe(
    mergeMap<Observable<BuildTimeIconMetaData>, any>(
      (metaData$: any) => metaData$,
    ),
    map<any, BuildTimeIconMetaData>(({ identifier, icon }) => {
      icon = _.cloneDeep(icon)
      return { identifier, icon }
    }),
  )

  // Inline SVG files content flow.
  const inlineSVGFiles$ = BuildTimeIconMetaData$.pipe(
    map<BuildTimeIconMetaData, WriteFileMetaData>(({ icon }) => {
      return {
        path: path.resolve(
          env.paths.INLINE_SVG_OUTPUT_DIR,
          `./${icon.name}.svg`,
        ),
        content: renderIconDefinitionToSVGElement(icon),
      }
    }),
  )

  // Icon files content flow.
  const iconTsTemplate = await fs.readFile(env.paths.ICON_TEMPLATE, 'utf8')
  const iconFiles$ = BuildTimeIconMetaData$.pipe(
    map<BuildTimeIconMetaData, { identifier: string; content: string }>(
      ({ identifier, icon }) => {
        return {
          identifier,
          content: Prettier.format(
            iconTsTemplate
              .replace(ICON_IDENTIFIER, identifier)
              .replace(ICON_JSON, JSON.stringify(icon)),
            env.options.prettier,
          ),
        }
      },
    ),
    map<{ identifier: string; content: string }, WriteFileMetaData>(
      ({ identifier, content }) => {
        return {
          path: path.resolve(env.paths.ICON_OUTPUT_DIR, `./${identifier}.ts`),
          content,
        }
      },
    ),
  )

  // Index File content flow
  const indexTsTemplate = await fs.readFile(env.paths.INDEX_TEMPLATE, 'utf8')
  const indexFile$ = svgMetaDataWithTheme$.pipe(
    mergeMap<any, any>((metaData$: any) => metaData$),
    reduce<any, string>(
      (acc, { identifier }) =>
        `${acc}export { default as ${identifier} } from './${identifier}';\n`,
      '',
    ),
    map<string, WriteFileMetaData>(content => ({
      path: env.paths.INDEX_OUTPUT,
      content: Prettier.format(
        indexTsTemplate.replace(EXPORT_DEFAULT_COMPONENT_FROM_DIR, content),
        env.options.prettier,
      ),
    })),
  )

  // Dist File content flow
  const distTsTemplate = await fs.readFile(env.paths.DIST_TEMPLATE, 'utf8')
  const dist$ = BuildTimeIconMetaData$.pipe(
    map<BuildTimeIconMetaData, string>(({ identifier, icon }) => {
      let content = ''
      const paths = (icon.icon.children || [])
        .filter(({ attrs }) => typeof attrs.d === 'string')
        .map(({ attrs }) => {
          const { fill, d } = attrs
          if (fill && d) {
            return `['${fill}', '${d}']`
          }
          return `'${d}'`
        })
        .join(',')
      content = Prettier.format(
        `export const ${identifier}: IconDefinition = ` +
          `getIcon('${icon.name}', ` +
          `getNode('${icon.icon.attrs.viewBox}', ${paths})` +
          `);`,
        env.options.prettier,
      )
      return content
    }),
    reduce<string, string>((acc, nextContent) => acc + nextContent, ''),
    map<string, WriteFileMetaData>(content => ({
      path: env.paths.DIST_OUTPUT,
      content: distTsTemplate.replace(EXPORT_DIST, content),
    })),
  )

  // Types file content flow
  const typesTsTemplate = await fs.readFile(env.paths.TYPES_TEMPLATE, 'utf8')
  const types$ = of<WriteFileMetaData>({
    path: env.paths.TYPES_OUTPUT,
    content: typesTsTemplate,
  })

  // Helpers file content flow
  const helpersTsTemplate = await fs.readFile(
    env.paths.HELPERS_TEMPLATE,
    'utf8',
  )
  const helpers$ = of<WriteFileMetaData>({
    path: env.paths.HELPERS_OUTPUT,
    content: helpersTsTemplate,
  })

  const files$ = iconFiles$.pipe(
    concat(inlineSVGFiles$),
    concat(indexFile$),
    concat(dist$),
    concat(types$),
    concat(helpers$),
  )

  return new Promise<Subscription>((resolve, reject) => {
    const subscription = files$
      .pipe(
        mergeMap(async ({ path: writeFilePath, content }) => {
          await fs.writeFile(writeFilePath, content, 'utf8')
          log.info(`Generated ./${path.relative(env.base, writeFilePath)}.`)
        }),
      )
      .subscribe(undefined, reject, () => {
        log.notice('Done.')
        resolve(subscription)
      })
  })
}
