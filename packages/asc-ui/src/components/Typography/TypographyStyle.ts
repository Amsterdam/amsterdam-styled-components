import styled, { css, styledComponents, Theme } from '@datapunt/asc-core'
import { em, margin } from 'polished'
import { getTypographyFromTheme } from '../../utils'

export type Props = {
  gutterBottom?: number
  paragraph?: boolean
  href?: string
  tabindex?: number
  element?: Variant
  color?: Theme.TypeLevel
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
  ${({ gutterBottom }) =>
    gutterBottom &&
    css`
      margin-bottom: ${em(`${gutterBottom}px`)};
    `}
  font-stretch: normal;
  letter-spacing: normal;
`
