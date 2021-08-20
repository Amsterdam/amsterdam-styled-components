import styled, { css } from 'styled-components'
import { themeColor, svgFill, themeSpacing } from '../../utils'
import IconStyle from '../Icon/IconStyle'
import Typography, { TypographyProps } from '../Typography'

export type LinkVariant = 'inline' | 'blank' | 'with-chevron'

export type Props = {
  variant?: LinkVariant
  icon?: 'external' | 'download'
  darkBackground?: boolean
  $darkBackground?: boolean // transient prop https://styled-components.com/docs/api#transient-props
  inList?: boolean
} & TypographyProps

export const BlankLinkStyleCSS = css`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`
export const InlineLinkStyleCSS = css`
  color: ${themeColor('primary')};
  ${svgFill(themeColor('primary'))};

  &:hover {
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
    color: ${themeColor('secondary')};
    ${svgFill(themeColor('secondary'))};
  }
`

const Icon = styled(IconStyle)`
  display: inline;
`

export const ChevronIcon = styled(Icon)`
  margin-right: ${themeSpacing(1)};
`

export const RightIcon = styled(Icon)`
  margin-left: ${themeSpacing(2)};
`

export const LinkContent = styled.span`
  width: 100%; /* IE11 Fix */
`

export default styled(Typography)<Props>`
  display: inline-flex;
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
  ${({ darkBackground, $darkBackground }) =>
    (darkBackground || $darkBackground) &&
    css`
      &,
      &:hover {
        color: ${themeColor('tint', 'level1')};
        ${IconStyle} {
          ${svgFill(themeColor('tint', 'level1'))}
        }
      }
    `};
`
