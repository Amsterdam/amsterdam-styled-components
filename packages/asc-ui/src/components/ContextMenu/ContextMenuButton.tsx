import React from 'react'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import ContextMenuStyle from '../../styles/components/ContextMenuStyle'
import { Icon } from '../..'

const ContextMenuButton = ({
  id,
  label,
  position,
  icon,
  open,
  ...otherProps
}: any) => {
  return (
    <ContextMenuStyle.ContextMenuButtonStyle {...{ id }} {...otherProps}>
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
        <ChevronDown />
      </Icon>
    </ContextMenuStyle.ContextMenuButtonStyle>
  )
}

export default ContextMenuButton
