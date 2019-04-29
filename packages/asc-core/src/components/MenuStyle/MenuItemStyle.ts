import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { getColorFromTheme, getTypographyFromTheme } from '../../utils'

export const MenuItemStyle = styled.li<MenuStyleProps.MenuItemStyleProps>`
  padding: 10px 15px 10px 11px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 42px;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  font-size: ${({ theme }) => getTypographyFromTheme(theme, 'fontSize')};

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level3')}};

  border-left-style: solid;
  border-left-color: transparent;
  border-left-width: 4px;

  & > span:last-child {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
  }

  & > span:first-child:not(:only-child) {
    margin-right: 5px;
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${({ theme }) => getColorFromTheme(theme, 'secondary', 'main')}};
    border-left-color: ${({ theme, focused }) =>
      focused && getColorFromTheme(theme, 'secondary', 'main')}};

    &:hover > span:last-child,
    &:focus > span:last-child {
      border-bottom-color: ${({ theme }) =>
        getColorFromTheme(theme, 'secondary', 'main')}};
    }
  }

  &:last-of-type {
    border-bottom-width: 0px;
  }
`

export default MenuItemStyle
