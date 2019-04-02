import { readableColor } from 'polished'
import { Theme } from '../theme'
import { getColor } from './themeUtils'

function fillSVG(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    let color = readableColor(getColor(theme, colorType))

    if (color[variant]) {
      color = color[variant]
    }

    if (typeof color === 'string') {
      return `
        rect,
        polygon,
        path {
          fill: ${color}
        }
      `
    }
  }

  return ''
}

export default fillSVG
