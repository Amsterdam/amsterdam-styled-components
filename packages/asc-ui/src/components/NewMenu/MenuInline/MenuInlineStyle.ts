import styled from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { MenuItemStyle } from '../MenuItem'
import { showHide, ShowHideTypes } from '../../../utils'
import { MENU_ITEM_SIZE } from '../constants'

export type Props = {
  onExpand?: Function
} & ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  color: palegoldenrod !important;
  ${showHide()}

  & > ${MenuItemStyle} {
    height: ${MENU_ITEM_SIZE}px;
  }
`

export default MenuInlineStyle
