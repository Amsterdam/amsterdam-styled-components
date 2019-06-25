import styled from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { showHide, ShowHideTypes } from '../../../utils'

export type Props = {
  onExpand?: Function
} & ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  color: palegoldenrod !important;
  ${showHide()}
`

export default MenuInlineStyle
