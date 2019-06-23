import React from 'react'
import MenuListStyle from './MenuListStyle'

const MenuList: React.FC<{}> = ({ children, ...otherProps }) => (
  <MenuListStyle {...otherProps}>{children}</MenuListStyle>
)

export default MenuList
