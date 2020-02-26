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
  forwardedAs?: any
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
  ${({ as, forwardedAs }) =>
    getProperty(defaultTypographyStyles, as || forwardedAs)};
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
