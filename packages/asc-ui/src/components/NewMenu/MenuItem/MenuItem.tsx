import React from 'react'
import MenuItemStyle from './MenuItemStyle'
import { Props as MenuItemLinkProps } from '../MenuItemLink/MenuItemLink'
import MenuItemLink from '../MenuItemLink'

type Props = {} & MenuItemLinkProps & React.HTMLProps<HTMLElement>

export default React.forwardRef<HTMLLIElement, Props>(function MenuItem(
  {
    children,
    linkIndex,
    element,
    onFocus,
    setCurrentLinkRef,
    iconRight,
    isActive,
    iconLeft,
    href,
    ...otherProps
  },
  ref,
) {
  return (
    // @ts-ignore
    <MenuItemStyle ref={ref} tabIndex={-1} {...otherProps}>
      <MenuItemLink
        {...{
          element,
          linkIndex,
          onFocus,
          setCurrentLinkRef,
          children,
          iconRight,
          isActive,
          iconLeft,
          href,
        }}
      >
        {children}
      </MenuItemLink>
    </MenuItemStyle>
  )
})
