import { StyledComponent } from 'styled-components'
import { em, margin, shade } from 'polished'
import styled, { css } from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'
import { THEME_NAME } from '../../theme'
import focus from '../shared/focus'

export type Props = {
  gutterBottom?: boolean
  paragraph?: boolean
  href?: string
  element?: Variant
}
const headings = css`
  font-weight: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => getThemeColor(theme, 'tint', 'level7')};
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
  p: css`
    line-height: 1.25;
  `,
  a: css`
    color: ${({ theme }) => getThemeColor(theme, 'primary')}
    display: inline-block;
    
    ${({ theme }) => focus(theme)}
    
    &:hover {
      color: ${({ theme }) => shade(0.2, getThemeColor(theme, 'primary'))}
    }
  `,
}

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a'

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
      fontFamily,
      letterSpacing,
      lineHeight,
    } = theme[THEME_NAME].typography[element]
    return css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      letter-spacing: ${letterSpacing};
      line-height: ${lineHeight};
    `
  }}
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
`
