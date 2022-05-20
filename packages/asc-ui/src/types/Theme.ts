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
    fontWeight: 400 | 500 | 700 | 800 | 'inherit'
    fontSize: CSSProp
    lineHeight: number | CSSProp
    marginBottom?: CSSProp
    small?: {
      fontSize: CSSProp
      lineHeight: number | CSSProp
    }
  }

  export interface TypographyElements {
    h1: TypographyElementStyle
    h2: TypographyElementStyle
    h3: TypographyElementStyle
    h4: TypographyElementStyle
    h5: TypographyElementStyle
    h6: TypographyElementStyle
    p: TypographyElementStyle
    li: TypographyElementStyle
    a: TypographyElementStyle
    em: TypographyElementStyle
    small: TypographyElementStyle
    span: TypographyElementStyle
  }

  export interface TypographyInterface extends Partial<TypographyElements> {
    fontFamily?: string
  }

  export interface ThemeInterface {
    breakpoint: GetBreakpointFunc
    colors: Partial<ColorTypeInterface>
    globalStyle: Partial<GlobalStyleType>
    typography: Partial<TypographyInterface>
    spacing: Spacing
  }
}
