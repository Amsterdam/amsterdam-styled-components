/* eslint-disable no-useless-constructor, no-empty-function */
import { CSSProp } from 'styled-components'

export namespace Theme {
  export type TypeLevel =
    | 'primary'
    | 'secondary'
    | 'bright'
    | 'tint'
    | 'none'
    | 'support'
    | 'default'

  export type Color = TypeLevel

  export type GlobalStyleType = string

  export interface PaletteInterface {
    light?: string
    dark?: string
    main?: string
  }

  export type Tint = {
    level1: string
    level2: string
    level3: string
    level4: string
    level5: string
    level6: string
    level7: string
  }

  export interface ColorInterface {
    primary: PaletteInterface | string
    secondary: PaletteInterface | string
    error: PaletteInterface | string
    tint: Tint
    support: {
      valid: string
      invalid: string
      focus: string
    }
    bright: PaletteInterface
  }

  type TypographyElementStyle = {
    color: CSSProp
    fontFamily: CSSProp
    fontWeight: 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'normal'
    fontSize: CSSProp
    lineHeight: number | CSSProp
    letterSpacing: CSSProp
  }

  type TypographyWeights = {
    fontWeightLight: number
    fontWeightRegular: number
    fontWeightMedium: number
    fontWeightHeavy: number
  }

  export type TypographyElements = {
    h1: TypographyElementStyle
    h2: TypographyElementStyle
    h3: TypographyElementStyle
    h4: TypographyElementStyle
    h5: TypographyElementStyle
    h6: TypographyElementStyle
    p: TypographyElementStyle
    a: TypographyElementStyle
  }

  export interface TypographyInterface
    extends TypographyWeights,
      TypographyElements {
    fontFamily: string
    fontSize: string
  }

  export interface ThemeInterface {
    globalStyle: GlobalStyleType
    colors: ColorInterface
    typography: TypographyInterface
  }

  export class ThemeFactory implements ThemeInterface {
    static createTheme(themeName: string): ThemeInterface {
      /* eslint-disable global-require, import/no-dynamic-require */
      const colors = require(`./${themeName}/colors`).default
      const typography = require(`./${themeName}/typography`).default
      const globalStyle = require(`./${themeName}/globalStyle`).default
      /* eslint-enable global-require, import/no-dynamic-require */
      return new ThemeFactory(colors, typography, globalStyle)
    }

    constructor(
      public colors: ColorInterface,
      public typography: TypographyInterface,
      public globalStyle: GlobalStyleType,
    ) {}
  }
}
