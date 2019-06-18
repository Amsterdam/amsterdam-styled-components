import React from 'react'
import MenuStyle, { MenuStyleProps } from './index'
import { Icon } from '../..'
import { KeyboardKeys } from '../../types'
import { useMenuContext } from './Menu'

const { MenuItemStyle, MenuItemWrapperStyle, MenuItemLabelStyle } = MenuStyle

type Props = {
  onClick?: Function
  role?: string
  icon?: React.ReactNode
  children?: any
  index?: number
  hoverColor?: string
  href?: string
  title?: string
} & MenuStyleProps.MenuItemStyleProps

const MenuItem = ({
  children,
  icon,
  index,
  onClick,
  hoverColor,
  href,
  title,
  ...otherProps
}: Props) => {
  const menuItemRef = React.useRef<HTMLAnchorElement>(null)

  const {
    selectedChild,
    onClick: onClickAction,
    expandedChild,
  }: any = useMenuContext()

  const focused = index === selectedChild

  React.useEffect(() => {
    if (menuItemRef && menuItemRef.current && focused) {
      menuItemRef.current.focus()
    }
  }, [selectedChild])

  const handleOnClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (onClick) {
      onClickAction()
      onClick(e)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleOnClick(e)
    }
  }

  return (
    <MenuItemWrapperStyle onKeyDown={handleKeyPress} tabIndex={-1}>
      <MenuItemStyle
        role="link"
        ref={menuItemRef}
        tabIndex={0}
        onClick={handleOnClick}
        hoverColor={expandedChild ? 'secondary' : hoverColor}
        onKeyDown={handleKeyPress}
        focused={focused}
        {...{ href, title }}
        {...otherProps}
      >
        {icon && <Icon size={14}>{icon}</Icon>}
        {/* CSS trick: we add an extra element span here so that MenuItemLabelStyle's
        border-bottom will underline overflowing text, since it's parent has display: flex */}
        <span>
          <MenuItemLabelStyle>{children}</MenuItemLabelStyle>
        </span>
      </MenuItemStyle>
    </MenuItemWrapperStyle>
  )
}

MenuItem.defaultProps = {
  height: 50,
  hoverColor: 'none',
}

export default MenuItem
