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

  export type TypeBreakpoint = 'min-width' | 'max-width'

  export interface GetBreakpointFunc {
    (type: Theme.TypeBreakpoint): string
  }

  export type TypeLayout = keyof GridInterface

  export type TypeSpan = { [s in TypeLayout]: number } | number

  export interface BreakpointsInterface {
    mobileS: GetBreakpointFunc
    mobileM: GetBreakpointFunc
    mobileL: GetBreakpointFunc
    tabletS: GetBreakpointFunc
    tabletM: GetBreakpointFunc
    laptop: GetBreakpointFunc
    laptopM: GetBreakpointFunc
    laptopL: GetBreakpointFunc
    desktop: GetBreakpointFunc
    desktopL: GetBreakpointFunc
  }

  export interface LayoutInterface {
    min?: number
    max?: number
    gutter: number
    columns: number
    margin: number
  }

  export interface GridInterface {
    large: LayoutInterface
    big: LayoutInterface
    medium: LayoutInterface
    small: LayoutInterface
  }

  export interface PaletteInterface {
    light?: string
    dark?: string
    main: string
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
    primary: PaletteInterface
    secondary: PaletteInterface
    error: PaletteInterface
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
    fontWeight: 400 | 500 | 700 | 'inherit'
    fontSize: CSSProp
    lineHeight: number | CSSProp
    letterSpacing: CSSProp
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
    em: TypographyElementStyle
  }

  export interface TypographyInterface extends TypographyElements {
    fontFamily: string
    fontSize: string
  }

  export interface ThemeInterface {
    breakpoints: BreakpointsInterface
    colors: ColorInterface
    globalStyle: GlobalStyleType
    typography: TypographyInterface
  }

  export class ThemeFactory implements ThemeInterface {
    static createTheme(themeName: string): ThemeInterface {
      /* eslint-disable global-require, import/no-dynamic-require */
      const breakpoints = require(`./${themeName}/breakpoints`).default
      const colors = require(`./${themeName}/colors`).default
      const globalStyle = require(`./${themeName}/globalStyle`).default
      const typography = require(`./${themeName}/typography`).default
      const layouts = require(`./${themeName}/layouts`).default
      const { maxGridWidth } = require(`./${themeName}/layouts`)
      /* eslint-enable global-require, import/no-dynamic-require */
      return new ThemeFactory(breakpoints, colors, globalStyle, typography, {
        ...layouts,
        maxGridWidth,
      })
    }

    constructor(
      public breakpoints: BreakpointsInterface,
      public colors: ColorInterface,
      public globalStyle: GlobalStyleType,
      public typography: TypographyInterface,
      public layouts: LayoutInterface,
    ) {}
  }
}
