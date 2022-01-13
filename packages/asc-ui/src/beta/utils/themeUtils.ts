import { css } from 'styled-components'
import type { Theme } from '../types'
import { fromProps } from './fromProps'
import { ascBetaTheme } from '..'

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

type BreakpointsType = [Theme.TypeBreakpoint, keyof Theme.BreakpointsInterface]

export const breakpoint = withTheme<BreakpointsType>((theme, type, variant) => {
  const breakpointFunc: Theme.GetBreakpointFunc = getValueFromTheme(
    `breakpoints.${[variant]}`,
  )({
    theme,
  })
  return breakpointFunc && breakpointFunc(type)
})

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

  return `clamp(
    ${minSize}rem,
    ${minSize}rem + ${maxSize - minSize} * 
    (100vw - ${minScreenWidth}rem) / ${maxScreenWidth - minScreenWidth},
    ${maxSize}rem
  )`
}

export interface FluidTypoStyle {
  small?: boolean
  intro?: boolean
  styleAs?: any
  as?: any
}

export const fluidTypoStyle = css`
  ${({ small, intro, styleAs, as }: FluidTypoStyle) => {
    const tag =
      (Object.keys(ascBetaTheme.typography).includes(styleAs) && styleAs) ||
      (Object.keys(ascBetaTheme.typography).includes(as) && as) ||
      'p'

    const prop =
      (small &&
        Object.keys(ascBetaTheme.typography[tag]).includes('small') &&
        'small') ||
      (intro &&
        Object.keys(ascBetaTheme.typography[tag]).includes('intro') &&
        'intro') ||
      'default'

    return css`
      font-size: ${calculateFluidStyle(
        ascBetaTheme.typography[tag][prop].minFontSize,
        ascBetaTheme.typography[tag][prop].maxFontSize,
      )};
      line-height: ${calculateFluidStyle(
        ascBetaTheme.typography[tag][prop].minLineHeight,
        ascBetaTheme.typography[tag][prop].maxLineHeight,
      )};
    `
  }}
`

export interface TypoStyle {
  gutterBottom?: {
    small: number
    large: number
  }
  strong?: boolean
  darkBackground?: boolean
}

export const typographyStyle = css<TypoStyle>`
  margin-top: 0;
  margin-bottom: ${({ gutterBottom }) =>
    `${
      typeof gutterBottom?.large === 'number'
        ? gutterBottom.large
        : gutterBottom || 0
    }px`};

  ${({ gutterBottom }) =>
    typeof gutterBottom?.small === 'number' &&
    css`
      @media screen and ${breakpoint('max-width', 'laptop')} {
        margin-bottom: ${gutterBottom.small}px;
      }
    `}

  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
    `}

  ${({ darkBackground }) =>
    darkBackground &&
    css`
      color: white;
      ${svgFill('white')}
    `}
`

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
