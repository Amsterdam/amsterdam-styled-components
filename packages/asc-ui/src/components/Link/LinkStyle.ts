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
  /**
   * @deprecated use prop darkBackground instead
   */
  onDarkBackground?: boolean
  focusStyle?: FocusStyle
  darkBackground?: boolean
} & TypographyProps

export const BlankLinkStyleCSS = css`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`
export const InlineLinkStyleCSS = css`
  display: inline-block;
  color: ${themeColor('primary')};

  &:hover {
    color: ${themeColor('secondary')};
  }
`
export const DefaultLinkStyleCSS = css<Props>`
  display: inline-flex;
  text-decoration: none;
  font-weight: 700;
  color: ${({ onDarkBackground, darkBackground }) =>
    onDarkBackground || darkBackground
      ? themeColor('tint', 'level1')
      : themeColor('tint', 'level7')};

  ${IconStyle} {
    margin: ${themeSpacing(1, 1, 0, 0)};
    ${({ onDarkBackground, darkBackground }) =>
      svgFill(
        onDarkBackground || darkBackground
          ? themeColor('tint', 'level1')
          : themeColor('tint', 'level7'),
      )}
  }

  &:hover {
    text-decoration: underline;
    color: ${({ onDarkBackground, darkBackground }) =>
      onDarkBackground || darkBackground
        ? themeColor('tint', 'level1')
        : themeColor('secondary', 'main')};
    ${({ onDarkBackground, darkBackground }) =>
      svgFill(
        onDarkBackground || darkBackground
          ? themeColor('tint', 'level1')
          : themeColor('secondary', 'main'),
      )};
  }
`

export const LinkContent = styled.span`
  width: 100%; /* IE11 Fix */
`

export default styled(Typography)<Props>`
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
`
