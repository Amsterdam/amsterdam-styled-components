import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const MenuLabel = ({ children }: any) => (
  <MenuStyle.MenuItemStyle tabIndex={1}>{children}</MenuStyle.MenuItemStyle>
)

export default MenuLabel
