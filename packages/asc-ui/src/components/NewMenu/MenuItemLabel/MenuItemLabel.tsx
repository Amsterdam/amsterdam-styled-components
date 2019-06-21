import React from 'react'
import MenuItemLabelStyle from './MenuItemLabelStyle'

const MenuItemLabel: React.FC<{}> = ({ children }) => {
  return (
    <span>
      <MenuItemLabelStyle>{children}</MenuItemLabelStyle>
    </span>
  )
}

export default MenuItemLabel
