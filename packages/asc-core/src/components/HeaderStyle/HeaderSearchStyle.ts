import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'

const HeaderSearchStyle = styled.div`
  background-color: rgba(128, 128, 128, 0.1);
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
