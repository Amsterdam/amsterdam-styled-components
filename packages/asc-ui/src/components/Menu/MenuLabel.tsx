import React from 'react'
import MenuStyle from './index'

const { MenuLabelStyle } = MenuStyle

const MenuLabel: React.FC<{}> = ({ children }) => (
  <MenuLabelStyle>{children}</MenuLabelStyle>
)

export default MenuLabel
