import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { MenuItemLabelStyle } from './MenuItemStyle'
import { color, focusStyle } from '../../utils'

const MenuButtonStyle = styled.button<MenuStyleProps.MenuButtonStyleProps>`
  ${focusStyle()}
  display: flex;
  background-color: ${({ open }) =>
    open ? color('tint', 'level2') : 'transparent'};
  border: 0px;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  padding: ${({ square }) => (square ? '15px' : '0 15px')};

  ${MenuItemLabelStyle} {
    border-bottom-color: ${({ open }) =>
      open ? color('secondary', 'main') : 'transparent'};
  }

  &:hover,
  &:focus {
    outline: none;

    ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')};
    }
  }
`

export default MenuButtonStyle
