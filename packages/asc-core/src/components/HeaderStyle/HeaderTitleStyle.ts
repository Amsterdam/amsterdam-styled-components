import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'

const HeaderTitleStyle = styled.div<{}>`
  @media screen and ${({ theme }) =>
    getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    flex-grow: 1;
  }

  & > h1 {
    display: flex;
    height: 100%
    margin: 0;
    background-color: rgba(192, 192, 192, 0.1);
  }

  & > h1 > span {
    display: inline-block;
    line-height: 1.5625rem;
    padding-top: 6px;
  }

  & > h1 > span > a {
    color: #000;
    text-decoration: none;
    line-height: 2.1875rem;

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
export default HeaderTitleStyle
