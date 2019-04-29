import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { getColorFromTheme } from '../../utils'

const MenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default MenuListStyle

export const MenuListWrapperStyle = styled.div.attrs(() => ({
  role: 'menu',
  tabIndex: -1,
}))<MenuStyleProps.MenuListStyleProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level2')};
  border-bottom: 4px solid
    ${({ theme }) => getColorFromTheme(theme, 'tint', 'level7')};
  max-width: 250px;
  width: 100%;
  &:focus {
    outline: none;
  }
`
