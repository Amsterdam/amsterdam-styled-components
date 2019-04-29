import React from 'react'
import MenuStyle from '../../styles/components/MenuStyle'

const MenuButton = ({ id, label, ...otherProps }: any) => {
  return (
    <MenuStyle.MenuButtonStyle {...{ id }} {...otherProps}>
      {label && label}
    </MenuStyle.MenuButtonStyle>
  )
}

export default MenuButton
