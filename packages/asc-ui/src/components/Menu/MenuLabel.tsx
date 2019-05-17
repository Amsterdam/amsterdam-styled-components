import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const { MenuLabelStyle } = MenuStyle

const MenuLabel = ({ children }: any) => (
  <MenuLabelStyle>{children}</MenuLabelStyle>
)

export default MenuLabel
