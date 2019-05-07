import styled from '../../styled-components'
import TopBarStyle from '../TopBarStyle'

export type HeaderStyleProps = {
  fullWidth?: boolean
}

const HeaderStyle = styled(TopBarStyle)<HeaderStyleProps>`
  flex-wrap: wrap;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ fullWidth }) => (!fullWidth ? '1600px;' : 'none')};
`

export default HeaderStyle
