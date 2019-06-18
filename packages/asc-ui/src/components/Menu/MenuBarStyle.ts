import styled from '@datapunt/asc-core'
import { fromTheme } from '../../utils'

const MenuBarStyle = styled.ul`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  font-size: ${fromTheme('typography.fontSize')};

  &:focus,
  &:hover {
    outline: none;
  }
`

export default MenuBarStyle
