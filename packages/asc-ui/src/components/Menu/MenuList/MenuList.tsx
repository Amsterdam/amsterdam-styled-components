import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import type { Props } from './MenuListStyle'
import MenuListStyle from './MenuListStyle'

const MenuList = forwardRef<
  HTMLUListElement,
  Props & HTMLAttributes<HTMLUListElement>
>(({ children, edgeDetection, ...otherProps }, ref) => (
  <MenuListStyle {...{ edgeDetection, ref }} {...otherProps}>
    {children}
  </MenuListStyle>
))

export default MenuList
