import React from 'react'
import MenuItemStyle from './MenuItemStyle'

type Props = React.HTMLProps<HTMLElement>

export default React.forwardRef<HTMLLIElement, Props>(function MenuItem(
  { children, className, ...otherProps },
  ref,
) {
  return (
    <MenuItemStyle
      className={className}
      // @ts-ignore
      ref={ref}
      {...otherProps}
    >
      {children}
    </MenuItemStyle>
  )
})
