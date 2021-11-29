import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'
import type { ElementType } from 'react'
import { getTypographyFromTheme, themeColor } from '../../utils'
import type { Theme } from '../../types'

export interface Props {
  gutterBottom?: number
  element?: Variant
  fontSize?: number
  styleAs?: keyof Theme.TypographyElements
  as?: ElementType
  forwardedAs?: ElementType
  strong?: boolean
  /**
   * @deprecated Use your own custom style rules
   */
  color?: Theme.ColorType
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
  ${getTypographyFromTheme()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
      color: ${themeColor('tint', 'level7')};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${themeColor(color)};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
`
