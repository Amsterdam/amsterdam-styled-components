import { css, Theme } from '@datapunt/asc-core'
import { fromTheme } from '.'

import BreakpointsInterface = Theme.BreakpointsInterface

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
) => ({ theme }: { theme: Theme.ThemeInterface }) => {
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

export const focusStyle = () => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
  &:focus {
    outline-color: ${color('support', 'focus')({ theme })};
    outline-style: solid;
    outline-width: 3px;
  }
`
export const breakpoint = (
  type: Theme.TypeBreakpoint,
  variant: keyof BreakpointsInterface,
) => ({ theme }: { theme: Theme.ThemeInterface }) => {
  const breakpointFunc: Theme.GetBreakpointFunc = fromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return breakpointFunc && breakpointFunc(type)
}

export const svgFill = (
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) => ({ theme }: { theme: Theme.ThemeInterface }) => {
  if (colorType) {
    const value = color(colorType, variant)({ theme })
    if (typeof value === 'string') {
      return `
        rect,
        polygon,
        path {
          fill: ${value}
        }
      `
    }
  }

  return ''
}
