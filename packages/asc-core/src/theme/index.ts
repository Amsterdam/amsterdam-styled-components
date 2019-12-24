/* eslint-disable no-useless-constructor, no-empty-function */
import { CSSProp } from 'styled-components'

export namespace Theme {
  export type ColorType =
    | 'primary'
    | 'secondary'
    | 'bright'
    | 'tint'
    | 'none'
    | 'support'
    | 'error'
    | 'default'

  export type GlobalStyleType = string

  export type TypeBreakpoint = 'min-width' | 'max-width'

  export interface GetBreakpointFunc {
    (type: Theme.TypeBreakpoint): string
  }

  export type TypeSpan = { [key: string]: number } | number

  export interface LayoutInterface {
    [key: string]: {
      columns: number
      gutter?: number
      margin?: number
      max?: number
      min?: number
    }
  }

  export type Spacing = number

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

  export interface GridInterface {
    xLarge: LayoutInterface
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

  export interface SupportPaletteInterface {
    valid: string
    invalid: string
    focus: string
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

  export interface ColorTypeInterface {
    primary: PaletteInterface
    secondary: PaletteInterface
    error: PaletteInterface
    tint: Tint
    support: SupportPaletteInterface
    bright: PaletteInterface
  }

  export interface ColorSubtypeInterface
    extends Tint,
      PaletteInterface,
      SupportPaletteInterface {}

  export type TypographyElementStyle = {
    color: CSSProp
    fontWeight: 400 | 500 | 700 | 'inherit'
    fontSize: CSSProp
    lineHeight: number | CSSProp
    letterSpacing: CSSProp
    marginBottom: CSSProp
  }

  export interface TypographyType extends Partial<TypographyElementStyle> {
    breakpoints?: {
      [key in keyof BreakpointsInterface]?: Partial<TypographyElementStyle>
    }
  }

  export interface TypographyElements {
    h1: TypographyType
    h2: TypographyType
    h3: TypographyType
    h4: TypographyType
    h5: TypographyType
    h6: TypographyType
    p: TypographyType
    li: TypographyType
    a: TypographyType
    em: TypographyType
    small: TypographyType
    span: TypographyType
  }

  export interface TypographyInterface extends Partial<TypographyElements> {
    fontFamily?: string
    fontSize?: string
  }

  export interface ThemeInterface {
    breakpoints: Partial<BreakpointsInterface>
    colors: Partial<ColorTypeInterface>
    globalStyle: Partial<GlobalStyleType>
    typography: Partial<TypographyInterface>
    layouts: Partial<LayoutInterface>
    maxGridWidth: number
    maxContainerWidth: number
    spacing: Spacing
  }

  export class ThemeFactory implements ThemeInterface {
    static createTheme(themeName: string): ThemeInterface {
      /* eslint-disable global-require, import/no-dynamic-require */
      const breakpoints = require(`./${themeName}/breakpoints`).default
      const colors = require(`./${themeName}/colors`).default
      const globalStyle = require(`./${themeName}/globalStyle`).default
      const typography = require(`./${themeName}/typography`).default
      const layouts = require(`./${themeName}/layouts`).default
      const {
        maxGridWidth,
        maxContainerWidth,
      } = require(`./${themeName}/layouts`)
      const spacing = require(`./${themeName}/spacing`).default
      /* eslint-enable global-require, import/no-dynamic-require */
      return new ThemeFactory(
        breakpoints,
        colors,
        globalStyle,
        typography,
        layouts,
        maxGridWidth,
        maxContainerWidth,
        spacing,
      )
    }

    constructor(
      public breakpoints: BreakpointsInterface,
      public colors: ColorTypeInterface,
      public globalStyle: GlobalStyleType,
      public typography: TypographyInterface,
      public layouts: LayoutInterface,
      public maxGridWidth: number,
      public maxContainerWidth: number,
      public spacing: Spacing,
    ) {}
  }
}
