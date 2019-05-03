import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const MenuLabel = ({ children, focused }: any) => (
  <MenuStyle.MenuItemStyle tabIndex={focused ? 0 : -1}>
    {children}
  </MenuStyle.MenuItemStyle>
)

export default MenuLabel
