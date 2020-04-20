import styled from 'styled-components'
import { MenuListStyle } from '../MenuList'
import { MenuItemStyle } from '../MenuItem'
import { showHide, ShowHideTypes, showAboveBackDrop } from '../../../utils'
import { MENU_ITEM_SIZE } from '../constants'

export type Props = {
  onExpand?: Function
  hasBackDrop?: boolean
} & ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  position: relative;

  & > ${MenuItemStyle} {
    height: ${MENU_ITEM_SIZE}px;
  }

  ${showAboveBackDrop()}
  ${showHide()}
`

export default MenuInlineStyle
