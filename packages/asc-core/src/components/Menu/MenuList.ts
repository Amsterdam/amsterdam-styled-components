import styled from '../../styled-components'
import { Menu } from './types'
import { getColor } from '../../utils/themeUtils'

const MenuList = styled.ul<Menu.MenuListProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default MenuList

export const MenuListWrapper = styled.div.attrs(() => ({
  role: 'document',
  tabIndex: -1,
}))<Menu.MenuListProps>`
  order: ${({ orientation }) => (orientation === 'top' ? -1 : 0)};
  border: 1px solid ${({ theme }) => getColor(theme, 'tint', 'level7')};
  max-width: 250px;
  width: 100%;
  &:focus {
    outline: none;
  }
`
