import styled from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { MenuItemStyle } from '../MenuItem'
import { showHide, ShowHideTypes } from '../../../utils'
import { MENU_ITEM_SIZE } from '../constants'
import { BACKDROP_Z_INDEX } from '../../shared/constants'

export type Props = ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  z-index: ${BACKDROP_Z_INDEX + 1};
  position: relative;
  ${showHide()}

  & > ${MenuItemStyle} {
    height: ${MENU_ITEM_SIZE}px;
    z-index: ${BACKDROP_Z_INDEX + 1};
  }
`

export default MenuInlineStyle
