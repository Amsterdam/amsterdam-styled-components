import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const MenuLabel = ({ children, focused }: any) => (
  <MenuStyle.MenuLabelStyle tabIndex={focused ? 0 : -1}>
    {children}
  </MenuStyle.MenuLabelStyle>
)

export default MenuLabel
