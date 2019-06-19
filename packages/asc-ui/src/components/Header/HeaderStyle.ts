import styled from '@datapunt/asc-core'
import { breakpoint } from '../../utils'
import TopBarStyle from '../TopBar/TopBarStyle'
import { HEADER_MAX_WIDTH } from './sizes'

export type HeaderStyleProps = {
  fullWidth?: boolean
}

const HeaderStyle = styled(TopBarStyle)<HeaderStyleProps>`
  flex-wrap: nowrap;
  height: 100%;
  margin: 0 auto;
  align-items: stretch;
  max-width: ${({ fullWidth }) =>
    !fullWidth ? `${HEADER_MAX_WIDTH}px` : 'none'};

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    padding: 0 10px;
  }
`

export default HeaderStyle
