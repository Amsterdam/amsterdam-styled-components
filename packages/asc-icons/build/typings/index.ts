import { IconDefinition } from './types'

import Prettier = require('prettier')
import SVGO = require('svgo')

export { AbstractNode, IconDefinition, ThemeType } from './types'

export interface Node {
  nodeName: string
  tagName?: string
  attrs: Array<{ name: string; value: string }>
  value?: string
  childNodes: Node[]
}

export interface Environment {
  readonly paths: {
    SVG_DIR: string
    ICON_TEMPLATE: string
    INDEX_TEMPLATE: string
    INDEX_OUTPUT: string
    DIST_TEMPLATE: string
    DIST_OUTPUT: string
    TYPES_TEMPLATE: string
    TYPES_OUTPUT: string
    HELPERS_TEMPLATE: string
    HELPERS_OUTPUT: string

    ICON_OUTPUT_DIR: string
    THEME_FILL_OUTPUT: string
    INLINE_SVG_OUTPUT_DIR: string
    INLINE_SVG_THEME_FILL_OUTPUT: string
  }
  readonly base: string
  readonly options: {
    svgo: SVGO.Options
    prettier: Prettier.Options
  }
}

export interface NameAndPath {
  kebabCaseName: string
  identifier: string
}

export interface BuildTimeIconMetaData {
  identifier: string
  icon: IconDefinition
}

export interface WriteFileMetaData {
  path: string
  content: string
}
