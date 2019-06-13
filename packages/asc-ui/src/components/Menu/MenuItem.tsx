import React from 'react'
import MenuStyle, { MenuStyleProps } from './index'
import { Icon } from '../..'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'

const { MenuItemStyle, MenuItemLabelStyle } = MenuStyle

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
  const menuItemRef = React.useRef<HTMLLIElement>(null)
  const linkRef = React.useRef<HTMLAnchorElement>(null)

  const { selectedChild, expandedChild }: any = React.useContext(MenuContext)

  const focused = index === selectedChild

  React.useEffect(() => {
    if (menuItemRef && menuItemRef.current && focused) {
      menuItemRef.current.focus()
    }
  }, [selectedChild])

  const handleOnClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleOnClick(e)
    }
  }

  return (
    <MenuItemStyle
      ref={menuItemRef}
      focused={focused}
      hoverColor={expandedChild ? 'secondary' : hoverColor}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      {...otherProps}
    >
      <a
        role="link"
        ref={linkRef}
        tabIndex={-1}
        onClick={handleOnClick}
        onKeyDown={handleKeyPress}
        {...{ href, title }}
      >
        {icon && <Icon size={14}>{icon}</Icon>}
        <span>
          <MenuItemLabelStyle>{children}</MenuItemLabelStyle>
        </span>
      </a>
    </MenuItemStyle>
  )
}

MenuItem.defaultProps = {
  height: 50,
  hoverColor: 'none',
}

export default MenuItem
