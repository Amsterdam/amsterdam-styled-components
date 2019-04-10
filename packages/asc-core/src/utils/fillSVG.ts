import { readableColor } from 'polished'
import { Theme } from '../theme'
import { getColorFromTheme } from './themeUtils'

function fillSVG(
  theme: Theme.DefaultThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    const color = getColorFromTheme(theme, colorType, variant)

    if (typeof color === 'string') {
      return `
        rect,
        polygon,
        path {
          fill: ${readableColor(color)}
        }
      `
    }
  }

  return ''
}

export default fillSVG
