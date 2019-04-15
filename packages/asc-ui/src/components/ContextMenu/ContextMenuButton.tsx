import React from 'react'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/Chevron-Down.svg'
import { AscCore } from '../../styles'
import { Icon } from '../../index'

const ContextMenuButton = ({
  id,
  label,
  position,
  icon,
  open,
  ...otherProps
}: any) => {
  return (
    <AscCore.ContextMenu.MenuButton {...{ id }} {...otherProps}>
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
    </AscCore.ContextMenu.MenuButton>
  )
}

export default ContextMenuButton
