import { css } from 'styled-components'
import { breakpoint, svgFill } from '@amsterdam/asc-ui'
import ascBetaTheme from '../theme/ascBetaTheme'

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
  gutterBottom?: any
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
