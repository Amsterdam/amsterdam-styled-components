import styled from 'styled-components'
import { breakpoint } from '../../utils'

const HeaderContentStyle = styled.div`
  height: 50px;
  margin: 0;
  padding: 15px 25px 0 0;
  font-weight: 700;
  width: 70%;
  display: flex;
  align-self: flex-start;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    display: none;
  }
`
export default HeaderContentStyle
