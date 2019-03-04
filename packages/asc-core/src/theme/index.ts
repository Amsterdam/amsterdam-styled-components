export const THEME_NAME = 'ascTheme'

export namespace Theme {
  export enum TypeLevel {
    primary = 'primary',
    secondary = 'secondary',
    bright = 'bright',
    tint = 'tint',
    none = 'none',
    default = 'default',
  }

  export type Color = TypeLevel

  export type GlobalStyleType = string

  export interface PaletteInterface {
    light?: string,
    dark?: string,
    main?: string,
  }

  export type Tint = {
    level1: string,
    level2: string,
    level3: string,
    level4: string,
    level5: string,
    level6: string,
    level7: string,
    level8: string,
  }

  export interface ColorInterface {
    primary: PaletteInterface,
    secondary: PaletteInterface,
    error: PaletteInterface,
    tint: Tint,
    bright: PaletteInterface,
  }

  export interface TypographyInterface {
    primary: string,
    secondary: string,
  }

  interface DefaultThemeInterface {
    colors: ColorInterface
    typography: TypographyInterface
    globalStyle: GlobalStyleType
  }

  export interface ThemeInterface {
    [THEME_NAME]: DefaultThemeInterface
  }

  export function getTheme(
    colors: ColorInterface,
    typography: TypographyInterface,
    globalStyle: GlobalStyleType,
  ): ThemeInterface {
    return {
      [THEME_NAME]: new Theme(colors, typography, globalStyle),
    }
  }

  export class Theme implements DefaultThemeInterface {
    constructor(
      public colors: ColorInterface,
      public typography: TypographyInterface,
      public globalStyle: GlobalStyleType,
    ) {
    }
  }
}
