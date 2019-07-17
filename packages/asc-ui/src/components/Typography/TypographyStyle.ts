import styled, { css, StyledComponent, Theme } from '@datapunt/asc-core'
import { em, margin } from 'polished'
import { getTypographyFromTheme, color } from '../../utils'
import { focusStyleText } from '../../utils/themeUtils'

export type Props = {
  gutterBottom?: boolean
  paragraph?: boolean
  href?: string
  tabindex?: number
  element?: Variant
  color?: Theme.TypeLevel
}
const headings = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const extendedStyles = {
  h1: headings,
  h2: headings,
  h3: headings,
  h4: css`
    ${headings}
  `,
  h5: css`
    ${headings}
  `,
  h6: css`
    ${headings}
  `,
  p: css``,
  a: css`
    color: ${color('primary')};
    display: inline-block;
    ${focusStyleText()}

    &:hover {
      color: ${color('secondary')};
    }
  `,
  em: css`
    font-style: italic;
  `,
}

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'em'

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key]

export default (element: Variant): StyledComponent<any, any> => styled(element)<
  Props
>`
  ${getProperty(extendedStyles, element)}
  ${margin(0)};
  ${({ gutterBottom }) =>
    gutterBottom &&
    css`
      margin-bottom: ${em('8px')};
    `}
  ${({ paragraph }) =>
    paragraph &&
    css`
      margin-bottom: ${em('15px')};
    `}
  ${({ theme }) => {
    const {
      fontWeight,
      fontSize,
      letterSpacing,
      lineHeight,
      color: colorProp,
    } = getTypographyFromTheme(theme, element)
    return css`
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      letter-spacing: ${letterSpacing};
      line-height: ${lineHeight};
      color: ${colorProp};
    `
  }}
  font-stretch: normal;
  letter-spacing: normal;
`
