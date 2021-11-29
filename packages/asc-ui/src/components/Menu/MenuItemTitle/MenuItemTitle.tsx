import type { FunctionComponent } from 'react'
import MenuItemTitleStyle from './MenuItemTitleStyle'

const MenuItemTitle: FunctionComponent = ({ children }) => (
  <MenuItemTitleStyle forwardedAs="li" variant="blank">
    {children}
  </MenuItemTitleStyle>
)

export default MenuItemTitle
