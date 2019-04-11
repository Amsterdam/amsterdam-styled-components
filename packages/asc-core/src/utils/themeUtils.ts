import { Theme } from '../theme'
import { fromTheme } from '.'

export function getTypographyFromTheme(
  theme: Theme.ThemeInterface,
  attributeType: string,
) {
  return fromTheme(`typography.${[attributeType]}`)({ theme })
}

export function getColorFromTheme(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    const color = fromTheme(`colors.${[colorType]}`)({ theme })

    if (typeof color === 'string') {
      return color
    }

    if (variant) {
      return fromTheme(`colors.${[colorType]}.${[variant]}`)({ theme })
    }
  }
  return fromTheme('colors.tint.level1')
}
