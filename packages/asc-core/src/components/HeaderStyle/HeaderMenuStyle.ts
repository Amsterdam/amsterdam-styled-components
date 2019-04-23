import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'

const HeaderMenuStyle = styled.div`
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    width: 50px;
  }
`

export default HeaderMenuStyle
