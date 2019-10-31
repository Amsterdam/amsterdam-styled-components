import styled, { css } from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { MenuItemStyle } from '../MenuItem'
import { showHide, ShowHideTypes } from '../../../utils'
import { MENU_ITEM_SIZE } from '../constants'
import { BACKDROP_Z_INDEX } from '../../shared/constants'

export type Props = {
  onExpand?: Function
  hasBackDrop?: boolean
} & ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  ${showHide()}

  & > ${MenuItemStyle} {
    height: ${MENU_ITEM_SIZE}px;
  }

  ${({ hasBackDrop }) =>
    hasBackDrop &&
    css`
      position: relative;
      z-index: ${BACKDROP_Z_INDEX + 1};
    `}
`

export default MenuInlineStyle
