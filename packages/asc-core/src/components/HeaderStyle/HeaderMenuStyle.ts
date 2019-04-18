import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'

const HeaderMenuStyle = styled.div`
  background-color: rgba(211, 128, 144, 0.1);

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    width: 50px;
  }
`

export default HeaderMenuStyle
