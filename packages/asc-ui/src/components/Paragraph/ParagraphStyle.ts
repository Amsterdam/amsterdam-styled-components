import styled, { css } from '@datapunt/asc-core'
import TypographyStyle, {
  Props as TypographyProps,
} from '../Typography/TypographyStyle'

export type Props = TypographyProps

export const ParagraphStyleCSS = css<Props>`
  margin-top: 0;
  color: inherit;
`

export default styled(TypographyStyle)<Props>`
  ${ParagraphStyleCSS};
`
