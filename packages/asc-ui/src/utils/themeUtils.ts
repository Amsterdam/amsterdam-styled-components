import { css, keyframes, Theme } from '@datapunt/asc-core'

import { fromProps } from './fromProps'
import { BACKDROP_Z_INDEX } from '../components/shared/constants'

import BreakpointsInterface = Theme.BreakpointsInterface
import ThemeInterface = Theme.ThemeInterface
import TypographyInterface = Theme.TypographyInterface
import TypographyElementStyle = Theme.TypographyElementStyle

type ThemeProp = {
  theme: Theme.ThemeInterface
}

/**
 * Curry function to provide the theme as first parameter, followed up with other parameters
 * @param cb
 *
 * @example
 * const myThemeHelperFunction = withTheme((theme, ...otherParams) => {
 *   ...
 * })
 *
 * css`
 *  ${myThemeHelperFunction(param1, param2)}
 * `
 */
export const withTheme = <T extends any[]>(
  cb: (theme: ThemeInterface, ...params: T) => any,
) => (...params: T) => ({ theme }: { theme: ThemeInterface }) =>
  cb(theme, ...params)

type ThemeColorParameters = [Theme.ColorType?, string?, string?]

/**
 * A shortcut to the `fromProps` that will get a value out of the props.theme object
 */
export const getValueFromTheme = withTheme<[string, Function?]>(
  (theme, identifier, callback) => fromProps(identifier, callback)(theme),
)

export const themeColor = withTheme<ThemeColorParameters>(
  (theme, colorType, colorSubtype = 'main', override) => {
    if (override) {
      return override
    }

    if (colorType) {
      return getValueFromTheme(`colors.${[colorType]}.${[colorSubtype]}`)({
        theme,
      })
    }

    return getValueFromTheme('colors.tint.level1')({ theme })
  },
)

type BreakpointsType = [Theme.TypeBreakpoint, keyof BreakpointsInterface]

export const breakpoint = withTheme<BreakpointsType>((theme, type, variant) => {
  const breakpointFunc: Theme.GetBreakpointFunc = getValueFromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return breakpointFunc && breakpointFunc(type)
})

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
  const styles = getValueFromTheme(`typography.${[as]}`)({
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

type BreakpointKeys = keyof BreakpointsInterface

type GetTypographyValueFromPropertyParameters = [
  keyof TypographyInterface,
  keyof TypographyElementStyle,
  BreakpointKeys?,
]

export const getTypographyValueFromProperty = withTheme<
  GetTypographyValueFromPropertyParameters
>((theme, element, property, breakpointRule) => {
  const rules = getValueFromTheme(`typography.${[element]}`)({ theme })
  if (breakpointRule) {
    if (rules.breakpoints[breakpointRule]) {
      return rules.breakpoints[breakpointRule][property]
    }
    return ''
  }
  return rules[property]
})

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

export const focusStyleFill = withTheme(
  theme => css`
    &:focus {
      background-color: ${themeColor('support', 'focus')({ theme })};
    }
  `,
)

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

export const svgFill = withTheme<[Theme.ColorType?, string?, string?]>(
  (theme, colorType, variant = 'main', override) => {
    if (colorType) {
      const value = themeColor(colorType, variant, override)({ theme })
      if (typeof value === 'string') {
        return css`
          & svg {
            rect,
            polygon,
            path {
              fill: ${value};
            }
          }
        `
      }
    }

    return ''
  },
)

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
    ? css`
        @media screen and ${breakpoint('min-width', hideAt)({ theme })} {
          display: none;
        }
      `
    : ''

  const showAtCss = showAt
    ? css`
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

// Function that uses the BACKDROP_Z_INDEX constant to determine the z-index for components rendered with a backdrop
// The first argument in the curry can be used to raise the z-index for components that need to be displayed above
// the backdrop, but aren't directly related
export const showAboveBackDrop = (show?: boolean) => ({
  hasBackDrop,
}: {
  hasBackDrop?: boolean
}) =>
  hasBackDrop || show
    ? css`
        z-index: ${BACKDROP_Z_INDEX + 1};
      `
    : ''

type ThemeSpacingParameters = [
  Theme.Spacing,
  Theme.Spacing?,
  Theme.Spacing?,
  Theme.Spacing?,
]

/**
 * Retrieve an amount of pixels by passing a factor that will multiply it by the theme's spacing unit
 *
 * @example If the theme's spacing unit is 4px:
 * css`
 *  padding: ${themeSpacing(1, 2, 1, 4)} // padding: 4px 8px 4px 18px;
 *  margin-bottom: ${themeSpacing(3)} // margin-bottom: 12px;
 * `
 */
export const themeSpacing = withTheme<ThemeSpacingParameters>(
  (theme, ...factors) => {
    const spacing: Theme.Spacing = getValueFromTheme('spacing')({ theme })
    return factors
      .map(factor => factor && `${factor * spacing}px`)
      .join(' ')
      .trim()
  },
)

/**
 * @deprecated Please wrap around the SC styled() method to extend your styles.
 */
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
