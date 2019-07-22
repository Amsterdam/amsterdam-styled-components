import React from 'react'
import MenuItemLabelStyle, { Props } from './MenuItemLabelStyle'

const MenuItemLabel: React.FC<
  Props & React.HTMLAttributes<HTMLSpanElement>
> = ({ children, className }) => {
  return (
    <span>
      <MenuItemLabelStyle className={className}>{children}</MenuItemLabelStyle>
    </span>
  )
}

export default MenuItemLabel
