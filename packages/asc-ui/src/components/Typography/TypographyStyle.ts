import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'
import type { ElementType } from 'react'
import {
  getTypographyFromTheme,
  themeColor,
  svgFill,
  breakpoint,
} from '../../utils'
import type { Theme } from '../../types'

export interface Props {
  gutterBottom?: {
    small: number
    large: number
  } & number
  styleAs?: keyof Theme.TypographyElements
  as?: ElementType
  forwardedAs?: ElementType
  strong?: boolean
  darkBackground?: boolean
}

export const defaultTypographyStyles: {
  [key: string]: FlattenSimpleInterpolation
} = {
  em: css`
    font-style: italic;
  `,
}

export type Variant = keyof typeof defaultTypographyStyles

export default styled.p<Props>`
  ${({ as, forwardedAs }) => {
    const key = as ?? forwardedAs

    return typeof key === 'string' && defaultTypographyStyles[key]
  }}

  margin: 0;
  color: ${themeColor('tint', 'level6')};

  ${getTypographyFromTheme()};

  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
    `}

  ${({ darkBackground }) =>
    darkBackground &&
    css`
      color: ${themeColor('tint', 'level1')};
      ${svgFill(themeColor('tint', 'level1'))}
    `}

  margin-bottom: ${({ gutterBottom }) =>
    `${
      typeof gutterBottom?.large === 'number'
        ? gutterBottom.large
        : gutterBottom || 0
    }px`};
  ${({ gutterBottom }) =>
    typeof gutterBottom?.small === 'number' &&
    css`
      @media screen and ${breakpoint('max-width')} {
        margin-bottom: ${gutterBottom.small}px;
      }
    `}
`
