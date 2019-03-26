import { readableColor } from 'polished'
import getThemeColor from './getThemeColor'
import { Theme } from '../theme'

function fillSVG(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  if (colorType) {
    let color = readableColor(getThemeColor(theme, colorType))

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
