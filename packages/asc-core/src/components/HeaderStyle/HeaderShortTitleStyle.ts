import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'
import HeaderTitleStyleBase from './HeaderTitleStyleBase'

const HeaderShortTitleStyle = styled(HeaderTitleStyleBase)`
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    flex-grow: 1;
  }

  & > h1 > a > div {
    height: 100%;
    line-height: 33px;
  }

  & > h1 > a > div > span {
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
export default HeaderShortTitleStyle
