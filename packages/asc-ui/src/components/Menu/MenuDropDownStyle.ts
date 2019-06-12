import styled from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import MenuItemStyle, {
  MenuItemLabelStyle,
  SubMenuItemStyle,
} from './MenuItemStyle'
import { color, svgFill } from '../../utils'

export const MenuDropDownButtonStyle = styled.button<
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

  ${SubMenuItemStyle},
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

      & svg {
        ${svgFill('secondary')};
      }
    }
  }
`

export default MenuDropDownStyle
