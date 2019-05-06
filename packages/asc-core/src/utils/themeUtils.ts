import { readableColor } from 'polished'
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

export const color = (
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
): any => ({ theme }: { theme: Theme.ThemeInterface }) => {
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

export const getFocusStyle = () => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
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

export const breakpoint = (
  type: Theme.TypeBreakpoint,
  variant: string,
): any => ({ theme }: { theme: Theme.ThemeInterface }) => {
  const themeBreakpoint: Theme.GetBreakpointFunc = fromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return themeBreakpoint && themeBreakpoint(type)
}

export const fillSvgFromTheme = (
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) => {
  if (colorType) {
    const selectedColor = getColorFromTheme(theme, colorType, variant)
    if (typeof selectedColor === 'string') {
      return `
        rect,
        polygon,
        path {
          fill: ${readableColor(selectedColor)}
        }
      `
    }
  }

  return ''
}
