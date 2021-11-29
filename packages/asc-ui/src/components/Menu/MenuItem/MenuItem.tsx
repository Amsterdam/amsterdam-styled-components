import type { DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import MenuItemStyle from './MenuItemStyle'

type Props = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

export default forwardRef<HTMLLIElement, Props>(function MenuItem(
  { children, className, ...otherProps },
  ref,
) {
  return (
    <MenuItemStyle className={className} ref={ref as any} {...otherProps}>
      {children}
    </MenuItemStyle>
  )
})
