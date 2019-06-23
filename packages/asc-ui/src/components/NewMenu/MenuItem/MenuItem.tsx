import React from 'react'
import MenuItemStyle from './MenuItemStyle'
import usePassPropsToChildren from '../../../utils/usePassPropsToChildren'

export default React.forwardRef<HTMLLIElement, any>(function MenuItem(
  { children: childrenProps, linkIndex, ...otherProps },
  ref,
) {
  const { children } = usePassPropsToChildren(childrenProps, { linkIndex })
  return (
    <MenuItemStyle ref={ref} tabIndex={-1} {...otherProps}>
      {children}
    </MenuItemStyle>
  )
}) as React.RefForwardingComponent<{}>
