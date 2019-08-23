import { css, keyframes, Theme } from '@datapunt/asc-core'
import fromTheme from './fromTheme'

import BreakpointsInterface = Theme.BreakpointsInterface
import ThemeInterface = Theme.ThemeInterface
import TypographyInterface = Theme.TypographyInterface
import TypographyElementStyle = Theme.TypographyElementStyle

type ThemeProp = {
  theme: Theme.ThemeInterface
}

export const color = (
  colorType?: Theme.TypeLevel,
  variant: string = 'main',
  override?: string,
) => ({ theme }: ThemeProp) => {
  if (override) {
    return override
  }
  if (colorType) {
    return fromTheme(`colors.${[colorType]}.${[variant]}`)({ theme })
  }

  return fromTheme('colors.tint.level1')({ theme })
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

const generateCSSFromTypography = (
  {
    defaultColor,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
    marginBottom,
  }: any,
  gutterBottom?: number,
) => css`
  color: ${defaultColor};
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
  margin-bottom: ${typeof gutterBottom === 'number'
    ? `${gutterBottom}px`
    : marginBottom};
`

export const getTypographyFromTheme = () => ({
  as: asProp = 'p',
  gutterBottom,
  styleAs,
  theme,
}: any) => {
  const as = styleAs || asProp
  const styles = fromTheme(`typography.${[as]}`)({ theme })
  if (!styles) {
    return ''
  }
  const {
    defaultColor,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
    marginBottom,
    breakpoints,
  } = styles
  return css`
    ${generateCSSFromTypography(
      {
        defaultColor,
        fontWeight,
        fontSize,
        letterSpacing,
        lineHeight,
        marginBottom,
      },
      gutterBottom,
    )}
    ${() =>
      breakpoints
        ? Object.entries(breakpoints).map(
            ([breakpointFromTypography, typoStyles]) => css`
              @media screen and ${breakpoint('min-width', <
                  keyof BreakpointsInterface
                >breakpointFromTypography)} {
                ${generateCSSFromTypography(typoStyles, gutterBottom)}
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
  override?: string,
) => ({ theme }: ThemeProp) => {
  if (colorType) {
    const value = color(colorType, variant, override)({ theme })
    if (typeof value === 'string') {
      return `& svg {
        rect,
        polygon,
        path {
          fill: ${value}
        }
      }
      `
    }
  }

  return ''
}

/**
 * Use this util to animate the background-color (or other property), for perceived performance purposes
 * @param theme
 * @param property
 */
export const perceivedLoading = (
  theme: ThemeInterface,
  property: string = 'background-color',
) => {
  const animation = keyframes`
    0% {
      ${property}: ${color('tint', 'level3')({ theme })};
    }
  
    50% {
      ${property}: ${color('tint', 'level4')({ theme })};
    }
    
    100% {
      ${property}: ${color('tint', 'level3')({ theme })};
    }
  `

  return css`
    animation: ${animation} 2s ease-in-out infinite;
  `
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

export const customCss = (props: any) =>
  props.css &&
  css`
    ${props.css}
  `
export interface CustomCssPropsInterface {
  css?: any
}

export type CustomCssPropsType = {
  css?: any
}

/**
 * Use this util to animate the background-color (or other property), for perceived performance purposes
 * @param theme
 * @param property
 */
export const getColorCode = (colorType: Theme.TypeLevel & Theme.Tint) => ({
  theme,
}: ThemeProp) => {
  if (colorType.startsWith('level')) {
    return color('tint', colorType)({ theme })
  }

  return color(colorType)({ theme })
}
