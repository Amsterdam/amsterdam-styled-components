import styled, { css, styledComponents } from '@datapunt/asc-core'
import TypographyStyle from './TypographyStyle'

type Props = {} & styledComponents.StyledProps<any>

export const HeaderStyleCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`

export default styled(TypographyStyle)<Props>`
  ${HeaderStyleCSS}
`
