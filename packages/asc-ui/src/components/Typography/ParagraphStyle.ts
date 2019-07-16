import styled, { css } from '@datapunt/asc-core'
import TypographyStyle from './TypographyStyle'
import { breakpoint } from '../../utils'

export type Props = {
  hasLongText?: boolean
}

export const ParagraphStyleCSS = css<Props>`
  margin-top: 0;
  margin-bottom: 20px;
  color: inherit;

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin-bottom: 24px;
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
