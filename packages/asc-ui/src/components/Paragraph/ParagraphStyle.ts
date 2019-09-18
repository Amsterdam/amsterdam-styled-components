import styled, { css } from '@datapunt/asc-core'
import TypographyStyle, {
  Props as TypographyProps,
} from '../Typography/TypographyStyle'
import { themeColor } from '../../utils'

export type Props = {
  strong?: boolean
} & TypographyProps

export const ParagraphStyleCSS = css<Props>`
  margin-top: 0;
  color: inherit;
  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
      color: ${themeColor('tint', 'level7')};
    `}
`

export default styled(TypographyStyle)<Props>`
  ${ParagraphStyleCSS};
`
