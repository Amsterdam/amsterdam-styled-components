import React from 'react'
import MenuStyle from './index'

const { MenuLabelStyle } = MenuStyle

const MenuLabel = ({ children }: any) => (
  <MenuLabelStyle>{children}</MenuLabelStyle>
)

export default MenuLabel
