import styled, { css } from '@datapunt/asc-core'
import { color } from '../../utils'
import { focusStyleText, svgFill } from '../../utils/themeUtils'
import Typography, { TypographyProps } from '../Typography'
import IconStyle from '../Icon/IconStyle'

export const BlankLinkStyleCSS = css`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`
export const InlineLinkStyleCSS = css`
  display: inline-block;
  color: ${color('primary')};

  &:hover {
    color: ${color('secondary')};
  }
`
export const DefaultLinkStyleCSS = css`
  display: inline-flex;
  text-decoration: none;
  font-weight: 700;
  color: ${color('tint', 'level7')};

  ${IconStyle} {
    margin: 3px;
  }

  &:hover {
    color: ${color('secondary')};
    text-decoration: underline;
    ${IconStyle} {
      ${svgFill('secondary')};
    }
  }
`

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
  color?: string
} & TypographyProps

export default styled(Typography)<Props>`
  ${focusStyleText()}
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
  
  ${({ color: colorProp }) =>
    colorProp &&
    css`
      color: ${colorProp};
      &:hover,
      &focus {
        color: ${colorProp};
      }
    `}
`
