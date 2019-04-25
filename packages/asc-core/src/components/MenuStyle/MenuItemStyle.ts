import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { getColorFromTheme, getTypographyFromTheme } from '../../utils'

export const MenuItemStyle = styled.li<MenuStyleProps.MenuItemStyleProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  width: 100%;
  cursor: pointer;
  font-size: ${({ theme }) => getTypographyFromTheme(theme, 'fontSize')};

  & > span:first-child {
    margin: 5px 6px;
  }

  ${({ divider, theme }) =>
    divider &&
    `border-bottom: 1px solid ${getColorFromTheme(theme, 'tint', 'level4')}}`}

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')}};
  }
`

export default MenuItemStyle
