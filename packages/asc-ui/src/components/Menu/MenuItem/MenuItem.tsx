import React from 'react'
import MenuItemStyle from './MenuItemStyle'

type Props = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>

export default React.forwardRef<HTMLLIElement, Props>(function MenuItem(
  { children, className, ...otherProps },
  ref,
) {
  return (
    <MenuItemStyle className={className} ref={ref as any} {...otherProps}>
      {children}
    </MenuItemStyle>
  )
})
