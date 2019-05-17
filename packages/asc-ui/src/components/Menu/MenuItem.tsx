import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
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
} & MenuStyleProps.MenuItemStyleProps

const MenuItem = ({ children, icon, index, onClick, hoverColor, ...otherProps }: Props) => {
  const menuItemRef = React.useRef<HTMLLIElement>(null)

  const { selectedChild, expandedChild }: any = React.useContext(MenuContext)

  const focused = index === selectedChild

  React.useEffect(() => {
    if (menuItemRef && menuItemRef.current && focused) {
      menuItemRef.current.focus()
    }
  }, [selectedChild])

  const handleOnClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
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
      onClick={handleOnClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      {...otherProps}
    >
      {icon && <Icon size={14}>{icon}</Icon>}
      <MenuItemLabelStyle>{children}</MenuItemLabelStyle>
    </MenuItemStyle>
  )
}

MenuItem.defaultProps = {
  height: 50,
  hoverColor: 'none'
}

export default MenuItem
