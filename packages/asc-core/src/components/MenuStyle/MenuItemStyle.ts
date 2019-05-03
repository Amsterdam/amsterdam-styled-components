import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import IconStyle from '../IconStyle'
import {
  fillSvgFromTheme,
  getColorFromTheme,
  getTypographyFromTheme,
} from '../../utils'

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
  position: relative;

  ${({ borderBottom, theme }) =>
    borderBottom &&
    `
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${getColorFromTheme(theme, 'tint', 'level3')};
  `}};

  border-left-style: solid;
  border-left-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level2')}};
  border-left-width: 4px;

  & > span:last-child {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme, focused }) =>
      focused ? getColorFromTheme(theme, 'secondary', 'main') : 'transparent'};
    line-height: 22px;
  }

  ${IconStyle} {
    &:not(:last-child) {
      margin-right: 5px;
    }

    & > svg {
      ${({ theme }) => fillSvgFromTheme(theme, 'tint', 'level7')};
    }
  }

  &:hover,
  &:focus {
    outline: none;

    & > span:last-child {
      border-bottom-color: ${({ theme }) =>
        getColorFromTheme(theme, 'secondary', 'main')}};
      color: ${({ theme }) => getColorFromTheme(theme, 'secondary', 'main')}};
    }

    &:hover > ${IconStyle}, &:focus > ${IconStyle} {
      & > svg {
        ${({ theme }) => fillSvgFromTheme(theme, 'secondary', 'main')};
      }
    }
  }

  &:last-of-type {
    border-bottom-width: 0px;
  }
`

export default MenuItemStyle
