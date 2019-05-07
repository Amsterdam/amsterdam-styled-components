import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import { Icon } from '../..'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'

type Props = {
  onClick?: Function
  role?: string
  icon?: React.ReactNode
  divider?: boolean
  children?: any
  index?: number
} & MenuStyleProps.MenuItemStyleProps

const MenuItem = ({
  children,
  icon,
  index,
  onClick,
  ...otherProps
}: Props) => {
  const ref = React.useRef<HTMLLIElement>(null)

  const { selectedChild }: any = React.useContext(MenuContext)

  const focused = index === selectedChild

  React.useEffect(() => {
    if (ref && ref.current && focused) {
      console.log('focus other element')
      ref.current.focus()
    }
  }, [focused])

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
    <MenuStyle.MenuItemStyle
      ref={ref}
      focused={focused}
      onClick={handleOnClick}
      onKeyDown={handleKeyPress}
      tabIndex={focused ? 0 : -1}
      {...otherProps}
    >
      {icon && <Icon size={14}>{icon}</Icon>}
      <span>
        {children}
        {` - ${index}`}
      </span>
    </MenuStyle.MenuItemStyle>
  )
}

export default MenuItem
