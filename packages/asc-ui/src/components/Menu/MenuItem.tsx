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
  divider?: boolean
  children?: any
  index?: number
  hoverColor?: string
  href?: string
  linkEl?: React.FC
  linkElProp?: Object
} & MenuStyleProps.MenuItemStyleProps

const MenuItem = ({
  children,
  icon,
  index,
  onClick,
  hoverColor,
  href,
  linkEl,
  linkElProp,
  ...otherProps
}: Props) => {
  const menuItemRef = React.useRef<HTMLLIElement>(null)

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

  const LinkElement = linkEl || 'a'

  return (
    <MenuItemStyle
      ref={menuItemRef}
      focused={focused}
      hoverColor={expandedChild ? 'secondary' : hoverColor}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      {...otherProps}
    >
      <LinkElement
        tabIndex={-1}
        onClick={handleOnClick}
        {...{ href }}
        {...linkElProp}
      />
      <>
        {icon && <Icon size={14}>{icon}</Icon>}
        <MenuItemLabelStyle>{children}</MenuItemLabelStyle>
      </>
    </MenuItemStyle>
  )
}

MenuItem.defaultProps = {
  height: 50,
  hoverColor: 'none',
}

export default MenuItem
