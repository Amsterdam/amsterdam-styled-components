import styled, { css } from '@datapunt/asc-core'
import TypographyStyle from '../Typography/TypographyStyle'
import { breakpoint, color } from '../../utils'

export type Props = {
  hasLongText?: boolean
  strong?: boolean
}

export const ParagraphStyleCSS = css<Props>`
  margin-top: 0;
  color: inherit;
  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
      color: ${color('tint', 'level7')};
    `}
  ${({ hasLongText }) =>
    hasLongText &&
    css`
      @media screen and ${breakpoint('min-width', 'tabletS')} {
        font-size: 18px;
        line-height: 25px;
      }
    `}
`

export default styled(TypographyStyle)<Props>`
  ${ParagraphStyleCSS}
`
