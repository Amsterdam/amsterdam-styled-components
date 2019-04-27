import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'
import HeaderTitleBaseStyle from './HeaderTitleBaseStyle'

const HeaderTitleShortStyle = styled(HeaderTitleBaseStyle)`
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    flex-grow: 1;
  }

  & > h1 > div > span {
    line-height: 50px;

    @media screen and ${({ theme }) =>
        getBreakpointFromTheme(theme, 'max-width', 'mobileM')} {
      font-size: 14px;
    }

    @media screen and ${({ theme }) =>
        getBreakpointFromTheme(theme, 'min-width', 'mobileM')} {
      font-size: 16px;
    }
  }
`
export default HeaderTitleShortStyle
