/* eslint-disable @typescript-eslint/no-namespace */
import type { CSSProp } from 'styled-components'

// TODO: This should not be in a namespace, use ES2015 modules instead.
export namespace Theme {
  export type ColorType =
    | 'primary'
    | 'secondary'
    | 'bright'
    | 'tint'
    | 'none'
    | 'support'
    | 'supplement'
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

  export interface SupplementPaletteInterface {
    purple: string
    pink: string
    orange: string
    yellow: string
    lightgreen: string
    darkgreen: string
    lightblue: string
  }

  export interface Tint {
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
    supplement: SupplementPaletteInterface
    bright: PaletteInterface
  }

  export interface ColorSubtypeInterface
    extends Tint,
      PaletteInterface,
      SupportPaletteInterface {}

  export interface TypographyElementStyle {
    fontWeight: 400 | 500 | 700 | 'inherit'
    fontSize: CSSProp
    lineHeight: number | CSSProp
    letterSpacing: CSSProp
    marginBottom: CSSProp
    /**
     * @deprecated Use your own custom style rules
     */
    color: CSSProp
  }

  export interface TypographyType extends Partial<TypographyElementStyle> {
    default: {
      minFontSize: number
      maxFontSize: number
      minLineHeight: number
      maxLineHeight: number
    }
    intro?: {
      minFontSize: number
      maxFontSize: number
      minLineHeight: number
      maxLineHeight: number
    }
    small?: {
      minFontSize: number
      maxFontSize: number
      minLineHeight: number
      maxLineHeight: number
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
    a: TypographyType
    button: TypographyType
    blockquote: TypographyType
    ul: TypographyType
    ol: TypographyType
    dl: TypographyType
    table: TypographyType
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
    spacing: Spacing
  }
}
