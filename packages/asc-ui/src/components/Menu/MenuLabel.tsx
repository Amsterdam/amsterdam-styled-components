import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const { MenuLabelStyle } = MenuStyle

const MenuLabel = ({ children, borderBottom }: any) => (
  <MenuLabelStyle borderBottom={borderBottom}>{children}</MenuLabelStyle>
)

export default MenuLabel
