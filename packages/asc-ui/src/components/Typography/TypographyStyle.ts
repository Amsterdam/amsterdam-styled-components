import styled, { css, Theme } from '@datapunt/asc-core'
import { getTypographyFromTheme, color } from '../../utils'

import TypographyElements = Theme.TypographyElements

export type Props = {
  gutterBottom?: number
  paragraph?: boolean
  element?: Variant
  color?: Theme.TypeLevel
  fontSize?: number
  styleAs?: keyof TypographyElements
  as?: any
  strong?: boolean
}

export const defaultTypographyStyles = {
  em: css`
    font-style: italic;
  `,
}

export type Variant = keyof typeof defaultTypographyStyles

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key]

export default styled.p<Props>`
  ${({ as }) => getProperty(defaultTypographyStyles, as)};
  margin: 0;
  ${getTypographyFromTheme()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
      color: ${color('tint', 'level7')};
    `}
  ${({ color: colorProp }) =>
    colorProp &&
    css`
      color: ${color(colorProp)};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `} 
`
