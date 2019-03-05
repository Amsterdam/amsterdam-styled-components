import { Theme, THEME_NAME } from '../theme'

function getThemeColor(
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

export default getThemeColor
