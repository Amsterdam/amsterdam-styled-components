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
  color?: string
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
  color: ${({ color: colorOverride }) =>
    themeColor('tint', 'level7', colorOverride)};

  ${IconStyle} {
    margin: ${themeSpacing(1, 1, 0, 0)};
    ${({ color: colorOverride, darkBackground, onDarkBackground }) =>
      darkBackground || onDarkBackground
        ? svgFill(themeColor('tint', 'level1'))
        : svgFill(themeColor('tint', 'level7', colorOverride))}
  }

  &:hover {
    text-decoration: underline;
    ${({ color: colorOverride, darkBackground, onDarkBackground }) =>
      css`
        color: ${darkBackground || onDarkBackground
          ? themeColor('tint', 'level1')
          : themeColor('supplement', 'main', colorOverride)};
        ${IconStyle} {
          ${darkBackground || onDarkBackground
            ? svgFill(themeColor('tint', 'level1'))
            : svgFill(themeColor('secondary', 'main', colorOverride))}
        }
      `}
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
