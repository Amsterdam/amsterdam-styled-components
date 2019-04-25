import styled from '../../styled-components'
import HeaderTitleBaseStyle from './HeaderTitleBaseStyle'

const HeaderTallTitleStyle = styled(HeaderTitleBaseStyle)`
  & > h1 > span {
    padding: 20px;
  }

  & > h1 > span > a {
    line-height: 26px;
    font-size: 26px;
    vertical-align: top;
  }
`

export default HeaderTallTitleStyle
