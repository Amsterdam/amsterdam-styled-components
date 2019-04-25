import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'
import HeaderTitleBaseStyle from './HeaderTitleBaseStyle'

const HeaderTitleShortStyle = styled(HeaderTitleBaseStyle)`
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    flex-grow: 1;
  }

  & > h1 > span > a {
    @media screen and ${({ theme }) =>
        getBreakpointFromTheme(theme, 'max-width', 'mobileM')} {
      line-height: 18px;
      font-size: 14px;
    }

    @media screen and ${({ theme }) =>
        getBreakpointFromTheme(theme, 'min-width', 'mobileM')} {
      line-height: 20px;
      font-size: 16px;
    }
  }
`
export default HeaderTitleShortStyle
