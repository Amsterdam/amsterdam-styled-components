import React from 'react'
import MenuItemTitleStyle from './MenuItemTitleStyle'

const MenuItemTitle: React.FC<{}> = ({ children }) => (
  <MenuItemTitleStyle forwardedAs="li" variant="blank">
    {children}
  </MenuItemTitleStyle>
)

export default MenuItemTitle
