import styled from 'styled-components'
import { MenuListStyle } from '../MenuList'
import { MenuItemStyle } from '../MenuItem'
import type { ShowHideTypes } from '../../../utils'
import { showHide, showAboveBackDrop } from '../../../utils'
import { MENU_ITEM_SIZE } from '../constants'

export type Props = {
  onExpand?: (expanded: boolean) => void
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
