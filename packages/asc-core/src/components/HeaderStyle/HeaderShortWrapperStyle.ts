import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'
import HeaderWrapperBaseStyle from './HeaderWrapperBaseStyle'

const HeaderShortWrapperStyle = styled(HeaderWrapperBaseStyle)`
  height: 50px;
  width: 100%;
  box-shadow: 0 4px rgba(0, 0, 0, 0.04);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  max-width: ${({ headerSize }) =>
    headerSize === 'short-content' ? '1800px' : 'none'};

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'laptop')} {
    display: ${({ headerSize }) => (headerSize === 'tall' ? 'none' : 'flex')};
  }
`

export default HeaderShortWrapperStyle
