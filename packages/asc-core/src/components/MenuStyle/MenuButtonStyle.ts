import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { color, focusStyle } from '../../utils'

const MenuButtonStyle = styled.button<MenuStyleProps.MenuButtonStyleProps>`
  ${focusStyle()}
  display: flex;
  background-color: ${({ open }) =>
    open ? color('tint', 'level2') : 'transparent'};
  border: 0px;
  align-items: center;
  height: 32px;
  padding: 0 15px;
`

export default MenuButtonStyle
