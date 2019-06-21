import React from 'react'
import MenuWrapper from './MenuWrapper/MenuWrapper'
import MenuToggle from './MenuToggle'

type Props = {
  toggle?: boolean
}

const Menu: React.FC<Props> = ({ children, toggle }) => {
  return toggle ? (
    <MenuToggle>{children}</MenuToggle>
  ) : (
    <MenuWrapper>{children}</MenuWrapper>
  )
}

export default Menu
