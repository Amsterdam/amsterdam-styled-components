import styled from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import MenuItemStyle, { MenuItemLabelStyle } from './MenuItemStyle'

export const MenuButtonLabelStyle = MenuItemLabelStyle

const MenuButtonStyle = styled(MenuItemStyle)<
  MenuStyleProps.MenuButtonStyleProps
>`
  justify-content: space-between;
`

export default MenuButtonStyle
