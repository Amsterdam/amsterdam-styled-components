import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'
import HeaderSearchStyle from './HeaderSearchStyle'

const HeaderContentStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    ${HeaderSearchStyle} {
      display: none;
    }
  }

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    & > div:last-child {
      display: none;
    }
  }
`

export default HeaderContentStyle
