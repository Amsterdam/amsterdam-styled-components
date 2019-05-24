import { Environment } from '../../typings'
import { log } from '..'
import { normalizeNamesFromDir } from './helpers'

import globby = require('globby')
import _ = require('lodash')
import path = require('path')

// eslint-disable-next-line import/prefer-default-export
export async function normalize(env: Environment) {
  const dir = path.join(env.paths.SVG_DIR)
  await normalizeNamesFromDir(dir)
  log.notice(`Normalize ${dir}`)

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
