import { Theme, THEME_NAME } from '../theme'

function getTheme(theme: Theme.ThemeInterface) {
  return theme[THEME_NAME]
}

export function getTypography(theme: Theme.ThemeInterface) {
  return getTheme(theme).typography
}

export function getColor(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    const color = theme[THEME_NAME].colors[colorType]

    if (typeof color === 'string') {
      return color
    }

    if (color[variant]) {
      return color[variant]
    }
  }

  return 'rgba(255,255,255,0)'
}
