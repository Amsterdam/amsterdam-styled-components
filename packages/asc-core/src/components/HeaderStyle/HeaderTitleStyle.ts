import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'
import Typography from '../Typography/Typography'

const HeaderTitleStyle = styled(Typography('a'))`
  margin: ${({ tall }) => (tall ? '0px' : '0px')};
  display: inline-flex;
  color: #000;
  text-decoration: none;

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'mobileM')} {
    font-size: 14px;
  }
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'mobileM')} {
    font-size: 14px;
  }
`
export default HeaderTitleStyle
