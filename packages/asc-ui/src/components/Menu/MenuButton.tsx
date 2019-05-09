import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'
import { Icon } from '../..'

const MenuButton = ({ id, label, icon, ...otherProps }: any) => {
  return (
    <MenuStyle.MenuButtonStyle {...{ id }} {...otherProps}>
      {icon && <Icon>{icon}</Icon>}
      {label && <MenuStyle.MenuItemLabelStyle>{label}</MenuStyle.MenuItemLabelStyle>}
    </MenuStyle.MenuButtonStyle>
  )
}

MenuButton.defaultProps = {
  height: 50
}

export default MenuButton
