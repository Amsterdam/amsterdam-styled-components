import styled, { css, styledComponents } from '@datapunt/asc-core'
import TypographyStyle from './TypographyStyle'

type Props = {} & styledComponents.StyledProps<any>

export const HeaderStyleCSS = css`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default styled(TypographyStyle)<Props>`
  ${HeaderStyleCSS}
`
