import styled from '../../styled-components'
import TopBarStyle from '../TopBarStyle'
import { HEADER_MAX_WIDTH } from './sizes'

export type HeaderStyleProps = {
  fullWidth?: boolean
}

const HeaderStyle = styled(TopBarStyle)<HeaderStyleProps>`
  flex-wrap: nowrap;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ fullWidth }) =>
    !fullWidth ? `${HEADER_MAX_WIDTH - 15 * 2}px` : 'none'};
`

export default HeaderStyle
