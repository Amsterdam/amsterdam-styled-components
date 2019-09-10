import { css, keyframes, Theme } from '@datapunt/asc-core'
import fromTheme from './fromTheme'

import BreakpointsInterface = Theme.BreakpointsInterface
import ThemeInterface = Theme.ThemeInterface
import TypographyInterface = Theme.TypographyInterface
import TypographyElementStyle = Theme.TypographyElementStyle

type ThemeProp = {
  theme: Theme.ThemeInterface
}

export const themeColor = (
  colorType?: Theme.ColorType,
  colorSubtype: string = 'main',
  override?: string,
) => ({ theme }: ThemeProp) => {
  if (override) {
    return override
  }

  if (colorType) {
    return fromTheme(`colors.${[colorType]}.${[colorSubtype]}`)({ theme })
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
    color,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
    marginBottom,
  }: Partial<TypographyElementStyle>,
  gutterBottom?: number,
) => css`
  color: ${color};
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
  const styles = fromTheme(`typography.${[as]}`)({
    theme,
  }) as Theme.TypographyType
  if (!styles) {
    return ''
  }
  const { breakpoints, ...otherProps } = styles
  return css`
    ${generateCSSFromTypography(
      {
        ...otherProps,
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
                ${generateCSSFromTypography(typoStyles || {}, gutterBottom)}
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

export const outlineStyle = (
  theme: ThemeInterface,
  width: number = 3,
  offset: number = 0,
) => css`
  outline-color: ${themeColor('support', 'focus')({ theme })};
  outline-style: solid;
  outline-offset: ${offset}px;
  outline-width: ${width}px;
`

/* we have chosen here to use a dubble selector '&&'.  
 This will override a hover state with outlines.
 introduced this when resolving issue: #131
*/
export const focusStyleOutline = (width?: number, offset?: number) => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) =>
  css`
    &&:focus {
      ${outlineStyle(theme, width, offset)}
    }
  `

export const focusStyleFill = () => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
  &:focus {
    background-color: ${themeColor('support', 'focus')({ theme })};
  }
`

export enum FocusStyleEnum {
  outline,
  fill,
  none,
}

/**
 * @param  {keyoftypeofFocusStyleEnum='fill'} focusStyle
 *
 * decorates an element with one of the existing focus styles:
 * - outline: draws a border around the element on focus
 * - fill: fills the element background on focus
 * - none: ignored the focus state
 */
export const getFocusStyle = (
  focusStyle: keyof typeof FocusStyleEnum = 'fill',
) => {
  const styles = {
    outline: focusStyleOutline(),
    fill: focusStyleFill(),
    none: '',
  }

  return styles[focusStyle]
}

/**
 * Util to hide the component for screen readers
 */
export const srOnlyStyle = () => ({ srOnly }: { srOnly?: boolean }) =>
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
  colorType?: Theme.ColorType,
  variant: string = 'main',
  override?: string,
) => ({ theme }: ThemeProp) => {
  if (colorType) {
    const value = themeColor(colorType, variant, override)({ theme })
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
 * @param animateLoading
 */
export const perceivedLoading = (
  theme: ThemeInterface,
  animateLoading: boolean = true,
) => {
  const animation = keyframes`
    0% {
      background-color: ${themeColor('tint', 'level3')({ theme })};
    }
  
    50% {
      background-color: ${themeColor('tint', 'level4')({ theme })};
    }
    
    100% {
      background-color: ${themeColor('tint', 'level3')({ theme })};
    }
  `

  return animateLoading
    ? css`
        animation: ${animation} 2s ease-in-out infinite;
      `
    : css`
        background-color: ${themeColor('tint', 'level4')({ theme })};
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
