import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const MenuLabel = ({ children, borderBottom }: any) => (
  <MenuStyle.MenuLabelStyle borderBottom={borderBottom}>{children}</MenuStyle.MenuLabelStyle>
)

export default MenuLabel
