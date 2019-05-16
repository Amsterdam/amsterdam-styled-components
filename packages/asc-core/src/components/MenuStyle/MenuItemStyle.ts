import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import IconStyle from '../IconStyle'
import { svgFill, color, getTypographyFromTheme } from '../../utils'

export const MenuItemLabelStyle = styled.span<
  MenuStyleProps.MenuItemStyleProps
>`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ focused }) =>
    focused ? color('secondary', 'main') : 'transparent'};
  line-height: 22px;
  font-family: 'AvenirNextLTW01-Medium';
  color: ${color('tint', 'level6')};
`

export const MenuItemStyle = styled.li<MenuStyleProps.MenuItemStyleProps>`
  padding: 10px 15px 10px 7px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  cursor: pointer;
  box-sizing: border-box;
  font-size: ${({ theme }) => getTypographyFromTheme(theme, 'fontSize')};
  position: relative;

  border-left-style: solid;
  border-left-width: 8px;
  border-left-color: transparent;

  ${IconStyle} {
    &:not(:last-child) {
      margin-right: 5px;
    }

    & > svg {
      ${svgFill('tint', 'level7')};
    }
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color('tint', 'level2')};

    ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')};
      color: ${({ theme, hoverColor}) => hoverColor ? color(hoverColor)({ theme }) : 'inherit'};
    }

    ${IconStyle} {
      & > svg {
        ${({ theme, hoverColor}) => svgFill(hoverColor)({ theme })};
      }
    }
  }
`

export default MenuItemStyle
