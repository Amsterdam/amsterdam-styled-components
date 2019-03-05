import { CSSProp } from 'styled-components'

export const THEME_NAME = 'ascTheme'

export namespace Theme {
  export type TypeLevel =
    | 'primary'
    | 'secondary'
    | 'bright'
    | 'tint'
    | 'none'
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
    level8: string
  }

  export interface ColorInterface {
    primary: PaletteInterface | string
    secondary: PaletteInterface | string
    error: PaletteInterface | string
    tint: Tint
    bright: PaletteInterface
  }

  type TypographyElementStyle = {
    color: CSSProp
    fontFamily: CSSProp
    fontWeight: keyof TypographyWeights
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

  interface DefaultThemeInterface {
    colors: ColorInterface
    typography: TypographyInterface
    globalStyle: GlobalStyleType
  }

  export interface ThemeInterface {
    [THEME_NAME]: DefaultThemeInterface
  }

  export class CreateTheme implements DefaultThemeInterface {
    static getTheme(
      colors: ColorInterface,
      typography: TypographyInterface,
      globalStyle: GlobalStyleType,
    ): ThemeInterface {
      return {
        [THEME_NAME]: new CreateTheme(colors, typography, globalStyle),
      }
    }

    constructor(
      public colors: ColorInterface,
      public typography: TypographyInterface,
      public globalStyle: GlobalStyleType,
    ) {}
  }
}
