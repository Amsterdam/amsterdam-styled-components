import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'

const HeaderSearchStyle = styled.div`
  overflow: hidden;

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    width: 50px;
  }

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'tablet')} {
    flex-grow: 1;
  }
`

export default HeaderSearchStyle
