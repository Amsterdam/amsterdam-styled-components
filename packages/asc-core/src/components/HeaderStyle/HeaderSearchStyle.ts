import styled from '../../styled-components'
import { breakpoint } from '../../utils'

const HeaderSearchStyle = styled.div`
  overflow: hidden;

  @media screen and ${breakpoint('max-width', 'tablet')} {
    width: 50px;
  }

  @media screen and ${breakpoint('min-width', 'tablet')} {
    flex-grow: 1;
  }
`

export default HeaderSearchStyle
