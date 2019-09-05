import styled, { css } from '@datapunt/asc-core'
import { themeColor } from '../../utils'
import { svgFill, FocusStyleEnum, getFocusStyle } from '../../utils/themeUtils'
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
  color?: string
  focusStyle?: keyof typeof FocusStyleEnum
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
    margin: 3px;
    ${({ color: colorOverride, theme }) =>
      svgFill('tint', 'level7', colorOverride)({ theme })};
  }

  &:hover {
    color: ${({ color: colorOverride, theme }) =>
      themeColor('secondary', 'main', colorOverride)({ theme })};
    text-decoration: underline;
    ${IconStyle} {
      ${({ color: colorOverride, theme }) =>
        svgFill('secondary', 'main', colorOverride)({ theme })};
    }
  }
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
