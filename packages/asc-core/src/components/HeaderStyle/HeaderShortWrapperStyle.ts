import styled from '../../styled-components'
import { getColorFromTheme, getBreakpointFromTheme } from '../../utils'
import HeaderWrapperBaseStyle from './HeaderWrapperBaseStyle';

const HeaderShortWrapperStyle = styled(HeaderWrapperBaseStyle)`
  height: 50px;
  width: 100%;
  ${({ theme }) => getColorFromTheme(theme, 'tint', 'level2')};
  position: fixed;
  top: 0;

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'laptop')} {
    display: ${({ headerSize }) => (headerSize === 'tall'  ? 'none' : 'flex')};
  }
`

export default HeaderShortWrapperStyle
