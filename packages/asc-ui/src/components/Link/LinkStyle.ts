import styled, { css } from 'styled-components'
import { themeColor } from '../../utils'
import {
  FocusStyle,
  getFocusStyle,
  svgFill,
  themeSpacing,
} from '../../utils/themeUtils'
import IconStyle from '../Icon/IconStyle'
import Typography, { TypographyProps } from '../Typography'

export type LinkVariant = 'inline' | 'blank' | 'with-chevron'

export type Props = {
  variant?: LinkVariant
  /**
   * @deprecated
   */
  linkType?: LinkVariant
  focusStyle?: FocusStyle
  darkBackground?: boolean
} & TypographyProps

export const BlankLinkStyleCSS = css`
  text-decoration: none;
  color: inherit;
`
export const InlineLinkStyleCSS = css`
  color: ${themeColor('primary')};
  ${svgFill(themeColor('primary'))};

  &:hover:not(:focus) {
    color: ${themeColor('secondary')};
    ${svgFill(themeColor('secondary'))};
  }
`
export const DefaultLinkStyleCSS = css<Props>`
  text-decoration: none;
  font-weight: 700;
  padding-right: ${themeSpacing(1)};
  color: ${themeColor('tint', 'level7')};

  &:hover {
    text-decoration: underline;
  }

  &:hover:not(:focus) {
    color: ${themeColor('secondary')};
    ${svgFill(themeColor('secondary'))};
  }
`

export const LinkContent = styled.span`
  width: 100%; /* IE11 Fix */
`

export default styled(Typography)<Props>`
  display: inline-flex;
  align-items: center;

  & > *:last-of-type {
    margin-left: ${themeSpacing(1)};
  }

  & > *:first-of-type {
    margin-right: ${themeSpacing(1)};
  }

  ${({ focusStyle }) => getFocusStyle(focusStyle)}
  ${({ variant }) => {
    switch (variant) {
      case 'blank':
        return BlankLinkStyleCSS
      case 'inline':
        return InlineLinkStyleCSS
      default:
        return DefaultLinkStyleCSS
    }
  }}

  ${({ darkBackground }) =>
    darkBackground &&
    css`
      &:not(:focus),
      &:hover:not(:focus) {
        color: ${themeColor('tint', 'level1')};

        ${IconStyle} {
          ${svgFill(themeColor('tint', 'level1'))}
        }
      }
    `};
`
