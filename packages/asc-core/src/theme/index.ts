export const THEME_NAME = 'ascTheme'

export namespace Theme {
  export enum TypeLevel {
    primary = 'primary',
    secondary = 'secondary',
    default = 'default',
  }

  export type Color = TypeLevel
  export type Typography = TypeLevel

  export interface ColorInterface {
    primary: string,
    secondary: string,
  }

  export interface TypographyInterface {
    primary: string,
    secondary: string,
  }

  interface DefaultThemeInterface {
    colors: ColorInterface;
    typography: TypographyInterface;
  }

  export interface ThemeInterface {
    [THEME_NAME]: DefaultThemeInterface
  }

  export function getTheme(
    colors: ColorInterface,
    typography: TypographyInterface,
  ): ThemeInterface {
    return {
      [THEME_NAME]: new Theme(colors, typography),
    }
  }

  export class Theme implements DefaultThemeInterface {
    constructor(
      public colors: ColorInterface,
      public typography: TypographyInterface,
    ) {
    }
  }
}
