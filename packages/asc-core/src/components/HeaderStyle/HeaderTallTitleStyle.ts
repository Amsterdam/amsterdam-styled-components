import styled from '../../styled-components'
import HeaderTitleBaseStyle from './HeaderTitleBaseStyle'

const HeaderTallTitleStyle = styled(HeaderTitleBaseStyle)`
  & > h1 > div > span {
    margin-top: 2px;
    line-height: 68px;
    font-size: 30px;
  }
`

export default HeaderTallTitleStyle
