import styled from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { MenuItemStyle } from '../MenuItem'
import { showHide, ShowHideTypes } from '../../../utils'
import { MENU_ITEM_SIZE } from '../constants'

export type Props = {} & ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  ${showHide()}

  & > ${MenuItemStyle} {
    height: ${MENU_ITEM_SIZE}px;
  }
`

export default MenuInlineStyle
