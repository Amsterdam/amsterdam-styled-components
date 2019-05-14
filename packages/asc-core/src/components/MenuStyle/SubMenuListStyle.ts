import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle from './MenuItemStyle'
import { color } from '../../utils'

const SubMenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }

  ${MenuItemStyle} {
    border-left-style: solid;
    border-left-color: ${color('tint', 'level3')};
    border-left-width: 4px;
  }
`
export default SubMenuListStyle

export const SubMenuListWrapperStyle = styled.div.attrs(() => ({
  role: 'submenu',
  tabIndex: -1,
}))<MenuStyleProps.MenuListStyleProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${color('tint', 'level1')};
  max-width: 250px;
  width: 100%;

  &:focus {
    outline: none;
  }
`
