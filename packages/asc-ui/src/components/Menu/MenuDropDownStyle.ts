import styled from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import MenuItemStyle, { MenuItemLabelStyle } from './MenuItemStyle'
import { color } from '../../utils'

export const MenuDropDownButtonStyle = styled.li<
  MenuStyleProps.MenuButtonStyleProps
>`
  display: flex;
  background-color: ${({ focused }) =>
    focused ? color('tint', 'level2') : 'transparent'};
  border: 0;
  font-weight: 500;
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

  &:focus {
    ${MenuDropDownButtonStyle} {
      z-index: 10;
      outline-style: solid;
      outline-offset: 0;
      outline-width: 3px;
      outline-color: ${color('support', 'focus')};
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
