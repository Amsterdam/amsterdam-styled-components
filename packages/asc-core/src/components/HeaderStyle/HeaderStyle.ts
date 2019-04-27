import styled from '../../styled-components'
import { getColorFromTheme } from '../../utils'

const HeaderStyle = styled.div`
  display: flex;
  min-height: 50px;
  width: 100%;
  flex-flow: no-wrap;
  box-shadow: 0 4px rgba(0, 0, 0, 0.04);
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
`

export default HeaderStyle
