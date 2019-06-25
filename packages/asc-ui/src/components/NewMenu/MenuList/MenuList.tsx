import React from 'react'
import MenuListStyle, { Props } from './MenuListStyle'

export default React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & Props
>(function MenuList({ children, edgeDetection, ...otherProps }, ref) {
  return (
    // @ts-ignore
    <MenuListStyle {...{ edgeDetection, ref }} {...otherProps}>
      {children}
    </MenuListStyle>
  )
}) as any
