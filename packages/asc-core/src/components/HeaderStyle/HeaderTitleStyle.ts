import styled from '../../styled-components'
import Typography from '../Typography/Typography'
import { breakpoint } from '../../utils'

const HeaderTitleStyle = styled(Typography('a'))`
  margin: ${({ tall }) => (tall ? '0px' : '0px')};
  display: inline-flex;
  color: #000;
  text-decoration: none;

  &:hover {
    color: inherit;
  }

  @media screen and ${breakpoint('max-width', 'mobileM')} {
    font-size: 14px;
  }
  @media screen and ${breakpoint('max-width', 'mobileM')} {
    font-size: 16px;
  }
`
export default HeaderTitleStyle
