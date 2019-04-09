import { readableColor } from 'polished'
import { Theme } from '../theme'
import { getColor } from './themeUtils'

function fillSVG(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    const color = getColor(theme, colorType, variant)

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
