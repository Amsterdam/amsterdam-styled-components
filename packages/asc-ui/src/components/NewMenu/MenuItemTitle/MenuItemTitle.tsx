import React from 'react'
import MenuItemTitleStyle from './MenuItemTitleStyle'

const MenuItemTitle: React.FC<{}> = ({ children }) => {
  return <MenuItemTitleStyle as="li">{children}</MenuItemTitleStyle>
}

export default MenuItemTitle
