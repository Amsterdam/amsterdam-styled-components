import styled, { css, styledComponents, Theme } from '@datapunt/asc-core'
import { em, margin } from 'polished'
import { getTypographyFromTheme, color as getColor } from '../../utils'

export type Props = {
  gutterBottom?: number
  paragraph?: boolean
  href?: string
  tabindex?: number
  element?: Variant
  color?: Theme.TypeLevel
  fontSize?: number
} & styledComponents.StyledProps<any>

export const defaultTypographyStyles = {
  em: css`
    font-style: italic;
  `,
}

export type Variant = keyof typeof defaultTypographyStyles

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key]

export default styled.p<Props>`
  ${({ as }) => getProperty(defaultTypographyStyles, as)}
  ${margin(0)};
  ${getTypographyFromTheme()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({ gutterBottom }) =>
    gutterBottom &&
    css`
      margin-bottom: ${em(`${gutterBottom}px`)};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${getColor(color)};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
`
