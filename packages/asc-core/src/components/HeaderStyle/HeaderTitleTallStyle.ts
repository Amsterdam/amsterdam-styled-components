import styled from '../../styled-components'
import HeaderTitleStyleBase from './HeaderTitleStyleBase'

const HeaderTitleTallStyle = styled(HeaderTitleStyleBase)`
  & > h1 > a > div > span {
    line-height: 67px;
    font-size: 30px;
  }
`

export default HeaderTitleTallStyle
