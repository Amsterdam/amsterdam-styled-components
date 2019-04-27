import styled from '../../styled-components'
import { getColorFromTheme, getBreakpointFromTheme } from '../../utils'
import HeaderWrapperBaseStyle from './HeaderWrapperBaseStyle';

const HeaderTallWrapperStyle = styled(HeaderWrapperBaseStyle)`
  height: 108px;
  border-bottom: 50px solid
    ${({ theme }) => getColorFromTheme(theme, 'tint', 'level2')};

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    display: none;
  }
`

export default HeaderTallWrapperStyle
