import { css, Theme } from '@datapunt/asc-core'
import { fromTheme } from '.'

import BreakpointsInterface = Theme.BreakpointsInterface
import ThemeInterface = Theme.ThemeInterface
import TypographyInterface = Theme.TypographyInterface
import TypographyElementStyle = Theme.TypographyElementStyle

type ThemeProp = {
  theme: Theme.ThemeInterface
}

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
) => ({ theme }: ThemeProp) => {
  return colorType
    ? fromTheme(`colors.${[colorType]}.${[variant]}`)({ theme })
    : fromTheme('colors.tint.level1')({ theme })
}

export const breakpoint = (
  type: Theme.TypeBreakpoint,
  variant: keyof BreakpointsInterface,
) => ({ theme }: ThemeProp) => {
  const breakpointFunc: Theme.GetBreakpointFunc = fromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return breakpointFunc && breakpointFunc(type)
}

const generateCSSFromTypography = ({
  defaultColor,
  fontWeight,
  fontSize,
  letterSpacing,
  lineHeight,
}: any) => css`
  color: ${defaultColor};
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
`

export const getTypographyFromTheme = () => ({ as = 'p', theme }: any) => {
  const {
    defaultColor,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
    breakpoints,
  } = fromTheme(`typography.${[as]}`)({ theme })
  return css`
    ${generateCSSFromTypography({
      defaultColor,
      fontWeight,
      fontSize,
      letterSpacing,
      lineHeight,
    })}
    ${() =>
      breakpoints
        ? Object.entries(breakpoints).map(
            ([breakpointFromTypography, styles]) => css`
              @media screen and ${breakpoint('min-width', <
                  keyof BreakpointsInterface
                >breakpointFromTypography)} {
                ${generateCSSFromTypography(styles)}
              }
            `,
          )
        : ``}
  `
}

export const getTypographyValueFromProperty = (
  element: keyof TypographyInterface,
  property: keyof TypographyElementStyle,
  breakpointRule?: keyof BreakpointsInterface,
) => ({ theme }: { theme: ThemeInterface }) => {
  const rules = fromTheme(`typography.${[element]}`)({ theme })
  if (breakpointRule) {
    if (rules.breakpoints[breakpointRule]) {
      return rules.breakpoints[breakpointRule][property]
    }
    return ''
  }
  return rules[property]
}

export const focusStyleOutline = (width: number = 3, offset: number = 0) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
  &:focus {
    z-index: 10;
    outline-color: ${color('support', 'focus')({ theme })};
    outline-style: solid;
    outline-offset: ${offset}px;
    outline-width: ${width}px;
  }
`

export const focusStyleText = () => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
  &:focus {
    background-color: ${color('support', 'focus')({ theme })};
  }
`
export const srOnlyStyle = () => ({ srOnly }: { srOnly: boolean }) =>
  srOnly
    ? css`
        border-width: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      `
    : ''

export const svgFill = (
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
) => ({ theme }: ThemeProp) => {
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

export const mapToBreakpoints = (
  sizes: any,
  propertyName: string,
  theme: Theme.ThemeInterface,
) => {
  const breakpointVariants = Object.keys(theme.breakpoints) as Array<
    keyof BreakpointsInterface
  >
  return css`
    ${sizes
      .map((value: number, index: number) =>
        index === 0
          ? `${propertyName}: ${value};`
          : breakpointVariants[index] &&
            `
        @media screen and ${breakpoint('min-width', breakpointVariants[index])({
          theme,
        })} {
          ${propertyName}: ${value};
        }
      `,
      )
      .join('')}
  `
}

export interface ShowHideTypes {
  showAt?: keyof BreakpointsInterface
  hideAt?: keyof BreakpointsInterface
}

type ShowHideProps = ThemeProp & ShowHideTypes

export const showHide = () => ({ hideAt, showAt, theme }: ShowHideProps) => {
  const hideAtCss = hideAt
    ? `
    @media screen and ${breakpoint('min-width', hideAt)({ theme })} {
      display: none;
    }
`
    : ''

  const showAtCss = showAt
    ? `
    @media screen and ${breakpoint('max-width', showAt)({ theme })} {
      display: none;
    }
`
    : ''

  return css`
    ${showAtCss}
    ${hideAtCss}
  `
}
