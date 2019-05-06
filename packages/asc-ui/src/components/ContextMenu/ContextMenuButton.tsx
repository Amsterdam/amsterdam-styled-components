import React from 'react'
import { AscCore } from '../../styles'
import { Icon } from '../../index'

const ContextMenuButton = ({
  id,
  label,
  position,
  icon,
  arrowIcon,
  open,
  ...otherProps
}: any) => {
  return (
    <AscCore.ContextMenu.MenuButton {...{ id }} {...otherProps}>
      {icon && icon}
      {label && <span>{label}</span>}
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
        {arrowIcon}
      </Icon>
    </AscCore.ContextMenu.MenuButton>
  )
}

export default ContextMenuButton
