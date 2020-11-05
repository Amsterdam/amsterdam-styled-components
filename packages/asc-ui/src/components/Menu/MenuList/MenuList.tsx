import React, { forwardRef, HTMLAttributes } from 'react'
import MenuListStyle, { Props } from './MenuListStyle'

const MenuList = forwardRef<
  HTMLUListElement,
  Props & HTMLAttributes<HTMLUListElement>
>(({ children, edgeDetection, ...otherProps }, ref) => (
  <MenuListStyle {...{ edgeDetection, ref }} {...otherProps}>
    {children}
  </MenuListStyle>
))

export default MenuList
