import styled, { css, styledComponents } from '@datapunt/asc-core'
import { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'

export type Props = TypographyProps & styledComponents.StyledProps<any>

export const HeaderStyleCSS = css`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default styled(Typography)<Props>`
  ${HeaderStyleCSS}
`
