import { css, keyframes } from 'styled-components'
import { BACKDROP_Z_INDEX } from '../components/shared/constants'
import type { Theme } from '../types'
import { fromProps } from './fromProps'

export type ThemeFn<T> = ({ theme }: { theme: Theme.ThemeInterface }) => T

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
export const withTheme =
  <T extends any[], U = any>(
    cb: (theme: Theme.ThemeInterface, ...params: T) => U,
  ) =>
  (...params: T) =>
  ({ theme }: { theme: Theme.ThemeInterface }): U =>
    cb(theme, ...params)

type ThemeColorParameters = [Theme.ColorType?, string?, string?]

/**
 * A shortcut to the `fromProps` that will get a value out of the props.theme object
 */
export const getValueFromTheme = withTheme<[string, ((value: any) => void)?]>(
  (theme, identifier, callback?: (value: any) => void) =>
    fromProps(identifier, callback)(theme),
)

export const themeColor = withTheme<ThemeColorParameters, string>(
  // eslint-disable-next-line default-param-last
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

type BreakpointsType = [Theme.TypeBreakpoint] | []

export const breakpoint = withTheme<BreakpointsType>(
  (theme, type = 'min-width') => {
    const breakpointFunc: Theme.GetBreakpointFunc = getValueFromTheme(
      'breakpoint',
    )({
      theme,
    })
    return breakpointFunc && breakpointFunc(type)
  },
)

const generateCSSFromTypography = (
  {
    fontWeight,
    fontSize,
    lineHeight,
    small,
  }: Partial<Theme.TypographyElementStyle>,
  smallProp?: boolean,
) => css`
  font-weight: ${fontWeight};
  ${small && smallProp
    ? `
      font-size: ${small.fontSize};
      line-height: ${small.lineHeight};
    `
    : `
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `}
`

export const getTypographyFromTheme =
  () =>
  ({ as: asProp = 'p', styleAs, theme, small: smallProp }: any) => {
    const as = styleAs || asProp
    const styles = getValueFromTheme(`typography.${[as]}`)({
      theme,
    }) as Theme.TypographyElementStyle
    if (!styles) {
      return ''
    }
    const { ...otherProps } = styles
    return css`
      ${generateCSSFromTypography(otherProps, smallProp)}
    `
  }

/**
 * When this style is applied on an element it will be hidden but still readable by screen readers.
 *
 * For example:
 * ```ts
 * const OnlyVisibleForScreenReaders = styled.button`${srOnlyStyle}`
 * ```
 */
export const srOnlyStyle = css`
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

/**
 * Fills the elements in an SVG with a color, useful for styling icons.
 *
 * For example, using a theme color:
 * ```jsx
 * const PrimaryCarIcon = styled(CarIcon)`
 *   ${svgFill(themeColor('primary'))}
 * `
 * ```
 *
 * Or by setting the color directly using any color valid in CSS, such as hexadecimal, rgba() and hsla().
 *
 * ```jsx
 * const RedCarIcon = styled(CarIcon)`
 *   ${svgFill('#FF0000')}
 * `
 * ```
 */
export const svgFill = withTheme((theme, color: string | ThemeFn<string>) => {
  const fill = typeof color === 'function' ? color({ theme }) : color

  return css`
    & svg {
      circle,
      rect,
      polygon,
      path {
        fill: ${fill};
      }
    }
  `
})

/**
 * Adds an animated background to the element to indicate the content is loading.
 * @param animateLoading Allows toggling the animation effect, if false a fixed color will be used instead.
 */
export const perceivedLoading = withTheme((theme, animateLoading = true) => {
  const animation = keyframes`
      0% {
        background-color: ${themeColor('tint', 'level2')({ theme })};
      }

      50% {
        background-color: ${themeColor('tint', 'level3')({ theme })};
      }

      100% {
        background-color: ${themeColor('tint', 'level2')({ theme })};
      }
    `

  return animateLoading
    ? css`
        animation: ${animation} 2s ease-in-out infinite;
      `
    : css`
        background-color: ${themeColor('tint', 'level3')({ theme })};
      `
})

// Function that uses the BACKDROP_Z_INDEX constant to determine the z-index for components rendered with a backdrop
// The first argument in the curry can be used to raise the z-index for components that need to be displayed above
// the backdrop, but aren't directly related
export const showAboveBackDrop =
  (show?: boolean) =>
  ({
    hasBackDrop,
    zIndexOffset,
  }: {
    hasBackDrop?: boolean
    zIndexOffset?: number
  }) =>
    hasBackDrop || show
      ? css`
          z-index: ${zIndexOffset
            ? BACKDROP_Z_INDEX + zIndexOffset + 1
            : BACKDROP_Z_INDEX + 1};
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
 *  padding: ${themeSpacing(1, 2, 1, 4)} // padding: 4px 8px 4px 16px;
 *  margin-bottom: ${themeSpacing(3)} // margin-bottom: 12px;
 * `
 */
export const themeSpacing = withTheme<ThemeSpacingParameters>(
  (theme, ...factors) => {
    const spacing: Theme.Spacing = getValueFromTheme('spacing')({ theme })
    return factors
      .map((factor) => factor && `${factor * spacing}px`)
      .join(' ')
      .trim()
  },
)

export const calculateFluidStyle = (
  minSizePx: number,
  maxSizePx: number,
  minScreenWidthPx = 320,
  maxScreenWidthPx = 1920,
) => {
  const defaultBaseSize = 16
  const minSize = minSizePx / defaultBaseSize
  const maxSize = maxSizePx / defaultBaseSize
  const minScreenWidth = minScreenWidthPx / defaultBaseSize
  const maxScreenWidth = maxScreenWidthPx / defaultBaseSize

  return `clamp(\
    ${minSize}rem,\
    ${minSize}rem + ${maxSize - minSize} * \
    (100vw - ${minScreenWidth}rem) / ${maxScreenWidth - minScreenWidth},\
    ${maxSize}rem\
  )`
}
