import styled from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { showHide, ShowHideTypes } from '../../../utils'

export type Props = {} & ShowHideTypes

const MenuInlineStyle = styled(MenuListStyle)<Props>`
  ${showHide()}
`

export default MenuInlineStyle
