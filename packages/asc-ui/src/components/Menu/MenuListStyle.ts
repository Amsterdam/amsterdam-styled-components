import styled from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import { color } from '../../utils'

const MenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  list-style: none;
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
  background-color: ${color('tint', 'level2')};
  border-bottom: 4px solid ${color('tint', 'level7')};
  width: 250px;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  ${({ alignRight }) => alignRight && 'right: 0'}
  &:focus {
    outline: none;
  }
`

MenuListWrapperStyle.defaultProps = {
  top: 50,
}
