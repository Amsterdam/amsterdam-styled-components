import React from 'react'
import MenuStyle, { MenuStyleProps } from './index'
import { Icon } from '../..'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'

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
