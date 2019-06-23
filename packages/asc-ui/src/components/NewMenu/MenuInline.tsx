import React from 'react'
import MenuList from './MenuList/MenuList'

const MenuInline: React.FC<{}> = ({ children }) => (
  <MenuList>{children}</MenuList>
)

export default MenuInline
