import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'
import { Icon } from '../..'

const { MenuButtonStyle, MenuItemLabelStyle } = MenuStyle

const MenuButton = ({ id, label, icon, ...otherProps }: any) => {
  return (
    <MenuButtonStyle {...{ id }} {...otherProps}>
      {icon && <Icon>{icon}</Icon>}
      {label && <MenuItemLabelStyle>{label}</MenuItemLabelStyle>}
    </MenuButtonStyle>
  )
}

export default MenuButton
