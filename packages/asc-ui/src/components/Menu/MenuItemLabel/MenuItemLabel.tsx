import React from 'react'
import MenuItemLabelStyle, { Props } from './MenuItemLabelStyle'

const MenuItemLabel: React.FC<Props> = ({ children }) => {
  return (
    <span>
      <MenuItemLabelStyle>{children}</MenuItemLabelStyle>
    </span>
  )
}

export default MenuItemLabel
