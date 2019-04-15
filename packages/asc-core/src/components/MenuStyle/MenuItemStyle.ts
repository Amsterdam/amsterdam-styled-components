import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import Icon from '../Icon'
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

  ${Icon} {
    margin: 5px 12px;
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
