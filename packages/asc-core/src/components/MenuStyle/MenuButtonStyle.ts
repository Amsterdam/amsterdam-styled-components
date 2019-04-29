import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { getColorFromTheme, getFocusStyle } from '../../utils'

const MenuButtonStyle = styled.button<MenuStyleProps.MenuButtonStyleProps>`
  ${({ theme }) => getFocusStyle(theme)}
  display: flex;
  background-color: ${({ theme, open }) =>
    open ? getColorFromTheme(theme, 'tint', 'level2') : 'transparent'};
  border: 0px;
  align-items: center;
  height: 32px;
  padding: 0 6px;
`

export default MenuButtonStyle
