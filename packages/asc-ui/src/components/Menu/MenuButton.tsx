import React from 'react'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import MenuStyle from '../../styles/components/MenuStyle'
import { Icon } from '../..'

const MenuButton = ({
  id,
  label,
  position,
  icon,
  open,
  ...otherProps
}: any) => {
  return (
    <MenuStyle.MenuButtonStyle {...{ id }} {...otherProps}>
      {icon && icon}
      {label}
      <Icon
        inline
        size={24}
        padding={4}
        rotate={
          (position === 'bottom' && !open) || (position !== 'bottom' && open)
            ? 180
            : 0
        }
      >
        <ChevronDown />
      </Icon>
    </MenuStyle.MenuButtonStyle>
  )
}

export default MenuButton
