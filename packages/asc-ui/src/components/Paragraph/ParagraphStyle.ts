import styled, { css } from 'styled-components'
import type { Props as TypographyProps } from '../Typography/TypographyStyle'
import TypographyStyle from '../Typography/TypographyStyle'

export type Props = TypographyProps

export const ParagraphStyleCSS = css<Props>`
  margin-top: 0;
  color: inherit;
`

export default styled(TypographyStyle)<Props>`
  ${ParagraphStyleCSS};
`
