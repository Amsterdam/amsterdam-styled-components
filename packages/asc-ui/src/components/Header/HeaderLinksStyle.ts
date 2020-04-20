import styled from 'styled-components'
import { breakpoint } from '../../utils'

const HeaderLinksStyle = styled.div`
  display: flex;
  position: absolute;
  top: 17px;
  right: 45px;
  align-items: center;
  justify-content: flex-end;

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    display: none;
  }
`

export default HeaderLinksStyle
