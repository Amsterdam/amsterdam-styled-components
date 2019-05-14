import styled from '../../styled-components'
import { breakpoint, fromTheme } from '../../utils'

const MenuBarStyle = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: ${fromTheme('typography.fontSize')};

  &:focus,
  &:hover {
    outline: none;
  }

  @media screen and ${breakpoint('max-width', 'laptop')} {
    display: none;
  }
`

export default MenuBarStyle
