import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'
import type { ElementType } from 'react'
import { getTypographyFromTheme, themeColor, svgFill } from '../../utils'
import type { Theme } from '../../types'

export interface Props {
  gutterBottom?: number
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
`
