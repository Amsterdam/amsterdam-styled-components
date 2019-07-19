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
    onClick,
    className,
    href,
    ...otherProps
  },
  ref,
) {
  return (
    <MenuItemStyle
      className={className}
      // @ts-ignore
      ref={ref}
      tabIndex={-1}
      {...otherProps}
    >
      <MenuItemLink
        {...{
          element,
          linkIndex,
          onFocus,
          onClick,
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
