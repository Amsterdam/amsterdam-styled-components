import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import { getColorFromTheme } from '../../utils'

const SubMenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }

  & > li > span:last-child {
    position: relative;
  }
`
export default SubMenuListStyle

export const SubMenuListWrapperStyle = styled.div.attrs(() => ({
  role: 'submenu',
  tabIndex: -1,
}))<MenuStyleProps.MenuListStyleProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  max-width: 250px;
  width: 100%;
  &:focus {
    outline: none;
  }
`
