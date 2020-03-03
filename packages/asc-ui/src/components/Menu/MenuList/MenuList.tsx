import React from 'react'
import MenuListStyle, { Props } from './MenuListStyle'

const MenuList = React.forwardRef<
  HTMLUListElement,
  Props & React.HTMLAttributes<HTMLUListElement>
>(({ children, edgeDetection, ...otherProps }, ref) => (
  <MenuListStyle {...{ edgeDetection, ref }} {...otherProps}>
    {children}
  </MenuListStyle>
))

export default MenuList
