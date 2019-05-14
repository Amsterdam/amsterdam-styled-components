import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle, { MenuItemLabelStyle } from './MenuItemStyle'
import IconStyle from '../IconStyle'
import { color, svgFill } from '../../utils'

export const SubMenuButtonLabelStyle = MenuItemLabelStyle

export const SubMenuWrapperStyle = styled.div`
  &:focus,
  &:hover {
    outline: none;

    ${SubMenuButtonLabelStyle} {
      border-bottom-color: ${color('secondary')};
      color: ${color('secondary')};
    }

    ${IconStyle} {
      & > svg {
        fill: ${svgFill('secondary')};
      }
    }
  }
`

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
