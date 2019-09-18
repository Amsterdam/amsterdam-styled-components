import styled, { css, Theme } from '@datapunt/asc-core'
import { getTypographyFromTheme, themeColor } from '../../utils'

import TypographyElements = Theme.TypographyElements

export type Props = {
  gutterBottom?: number
  element?: Variant
  color?: Theme.ColorType
  fontSize?: number
  styleAs?: keyof TypographyElements
  as?: any
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
