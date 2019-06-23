import React from 'react'
import MenuList from './MenuList/MenuList'
import MenuToggle from './MenuToggle'

type Props = {
  toggle?: boolean
  align?: 'left' | 'right'
}

const Menu: React.FC<Props> = ({ children, align, toggle }) => {
  return toggle ? (
    <MenuToggle align={align}>{children}</MenuToggle>
  ) : (
    <MenuList>{children}</MenuList>
  )
}

export default Menu
