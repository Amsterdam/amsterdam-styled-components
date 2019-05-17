import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle, { MenuItemLabelStyle } from './MenuItemStyle'
// import SubMenuButtonStyle, { SubMenuButtonLabelStyle } from './SubMenuButtonStyle'
import { color } from '../../utils'

export const MenuDropDownButtonStyle = styled.li<
  MenuStyleProps.MenuButtonStyleProps
>`
  display: flex;
  background-color: ${({ focused }) =>
    focused ? color('tint', 'level2') : 'transparent'};
  border: 0px;
  font-family: 'AvenirNextLTW01-Medium';
  align-items: center;
  height: ${({ height }) => `${height}px`};
  padding: 15px;
  box-sizing: border-box;

  &:focus,
  &:hover {
    background-color: ${color('tint', 'level2')};
  }
`

const MenuDropDownStyle = styled.div<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }

  &:hover,
  &:focus {
    outline: none;

    ${MenuDropDownButtonStyle} {
      background-color: ${color('tint', 'level2')};
    }
  }

  ${MenuItemStyle} {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${color('tint', 'level3')};
    width: 100%;

    &:focus,
    &:hover {
      ${MenuItemLabelStyle} {
        color: ${color('secondary')};
      }
    }
  }
`

export default MenuDropDownStyle
