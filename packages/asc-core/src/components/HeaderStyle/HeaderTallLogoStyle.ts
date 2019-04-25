import styled from '../../styled-components'
import HeaderLogoStyle from './HeaderLogoStyle'

const HeaderTallLogoStyle = styled(HeaderLogoStyle)`
  display: inline-block;
  min-height: 108px;
  padding: 20px 20px 20px 15px;

  & > svg {
    height: 68px;
    width: 85px;
    left: 0px;
  }
`

export default HeaderTallLogoStyle
