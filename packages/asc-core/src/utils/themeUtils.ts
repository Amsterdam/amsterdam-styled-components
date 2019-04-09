import { Theme, THEME_NAME } from '../theme'
import { fromTheme } from '.'

function getTheme(theme: Theme.ThemeInterface) {
  return theme[THEME_NAME]
}

export function getTypography(
  theme: Theme.ThemeInterface,
  attributeType: string,
) {
  return fromTheme(`typography.${[attributeType]}`)({ theme: getTheme(theme) })
}

export function getColor(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    const color = fromTheme(`colors.${[colorType]}`)({ theme: getTheme(theme) })

    if (typeof color === 'string') {
      return color
    }

    if (variant) {
      return fromTheme(`colors.${[colorType]}.${[variant]}`)({
        theme: getTheme(theme),
      })
    }
  }
  return 'rgba(255,255,255,0)'
}
