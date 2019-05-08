import styled from '../../styled-components'
import { breakpoint } from '../../utils'

const HeaderMenuStyle = styled.div`
  @media screen and ${breakpoint('max-width', 'laptop')} {
    width: 50px;
  }
`

export default HeaderMenuStyle
