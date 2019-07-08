import styled, { css } from '@datapunt/asc-core'
import TypographyStyle from './TypographyStyle'
import { breakpoint } from '../../utils'

export type Props = {
  hasLongText?: boolean
}

export const ParagraphStyleCSS = css<Props>`
  margin: 8px 0 20px;
  color: inherit;

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin: 8px 0 24px;
  }

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
