import styled from 'styled-components'
import TopBarStyle from '../TopBar/TopBarStyle'
import { getValueFromTheme } from '../../utils'

export interface Props {
  fullWidth?: boolean
}

const HeaderStyle = styled(TopBarStyle)<Props>`
  flex-wrap: nowrap;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  align-items: stretch;
  max-width: ${({ fullWidth, theme }) =>
    fullWidth ? 'none' : `${getValueFromTheme('maxGridWidth')({ theme })}px`};
`

export default HeaderStyle
