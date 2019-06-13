import styled from '@datapunt/asc-core'
import TopBarStyle from '../TopBar/TopBarStyle'
import { HEADER_MAX_WIDTH } from './sizes'

export type HeaderStyleProps = {
  fullWidth?: boolean
}

const HeaderStyle = styled(TopBarStyle)<HeaderStyleProps>`
  flex-wrap: nowrap;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ fullWidth }) =>
    !fullWidth ? `${HEADER_MAX_WIDTH}px` : 'none'};
`

export default HeaderStyle
