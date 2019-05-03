import { css } from '../styled-components'
import { Theme } from '../theme'
import { fromTheme } from '.'

export const getColorFromTheme = (
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) => {
  return colorType
    ? fromTheme(`colors.${[colorType]}.${[variant]}`)({ theme })
    : fromTheme('colors.tint.level1')({ theme })
}

export const getTypographyFromTheme = (
  theme: Theme.ThemeInterface,
  attributeType: string,
) => {
  return fromTheme(`typography.${[attributeType]}`)({ theme })
}

export const getFocusStyle = (theme: Theme.ThemeInterface) => css`
  &:focus {
    outline-color: ${getColorFromTheme(theme, 'support', 'focus')};
    outline-style: solid;
    outline-width: medium;
  }
`
export const getBreakpointFromTheme = (
  theme: Theme.ThemeInterface,
  type: Theme.TypeBreakpoint,
  variant: string,
) => {
  const breakpoint: Theme.GetBreakpointFunc = fromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return breakpoint && breakpoint(type)
}

export const fillSvgFromTheme = (
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) => {
  if (colorType) {
    const color = getColorFromTheme(theme, colorType, variant)
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
