import styled, { css } from '@datapunt/asc-core'
import { themeColor } from '../../utils'
import {
  svgFill,
  FocusStyleEnum,
  getFocusStyle,
  themeSpacing,
} from '../../utils/themeUtils'
import Typography, { TypographyProps } from '../Typography'
import IconStyle from '../Icon/IconStyle'

export enum LinkVariants {
  inline,
  blank,
  withChevron = 'with-chevron',
}

export type Props = {
  variant?: keyof typeof LinkVariants
  /**
   * @deprecated
   */
  linkType?: keyof typeof LinkVariants
  /**
   * @deprecated use prop onDarkBackground instead
   */
  color?: string
  focusStyle?: keyof typeof FocusStyleEnum
  onDarkBackground?: boolean
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
  color: ${({ color: colorOverride, theme }) =>
    themeColor('tint', 'level7', colorOverride)({ theme })};

  ${IconStyle} {
    margin: ${themeSpacing(1, 1, 0, 0)};
    ${({ color: colorOverride, theme, onDarkBackground }) =>
      onDarkBackground
        ? svgFill('tint', 'level1')({ theme })
        : svgFill('tint', 'level7', colorOverride)({ theme })};
  }

  &:hover {
    text-decoration: underline;
    ${({ color: colorOverride, theme, onDarkBackground }) =>
      css`
        color: ${onDarkBackground
          ? themeColor('tint', 'level1')({ theme })
          : themeColor('secondary', 'main', colorOverride)({ theme })};
        ${IconStyle} {
          ${onDarkBackground
            ? svgFill('tint', 'level1')({ theme })
            : svgFill('secondary', 'main', colorOverride)({ theme })}
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
