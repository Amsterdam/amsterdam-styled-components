import React from 'react'
import MenuStyle from './index'

const { MenuLabelStyle } = MenuStyle

const MenuLabel: React.FC<{ height?: number }> = ({ children, height }) => (
  <MenuLabelStyle tabIndex={-1} height={height}>
    {children}
  </MenuLabelStyle>
)

export default MenuLabel
