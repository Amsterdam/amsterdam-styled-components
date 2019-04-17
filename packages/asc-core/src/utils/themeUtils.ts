import { css } from '../styled-components'
import { Theme } from '../theme'
import { fromTheme } from '.'

export function getColorFromTheme(
  theme: Theme.ThemeInterface,
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) {
  return colorType
    ? fromTheme(`colors.${[colorType]}.${[variant]}`)({ theme })
    : fromTheme('colors.tint.level1')({ theme })
}

export function getTypographyFromTheme(
  theme: Theme.ThemeInterface,
  attributeType: string,
) {
  return fromTheme(`typography.${[attributeType]}`)({ theme })
}

export const getFocusStyle = (theme: Theme.ThemeInterface) => css`
  &:focus {
    outline-color: ${getColorFromTheme(theme, 'support', 'focus')};
    outline-style: solid;
    outline-width: medium;
  }
`
export function getBreakpointFromTheme(
  theme: Theme.ThemeInterface,
  type: Theme.TypeBreakpoint,
  variant: string,
) {
  const breakpoint: Theme.GetBreakpointFunc = fromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return breakpoint && breakpoint(type)
}
