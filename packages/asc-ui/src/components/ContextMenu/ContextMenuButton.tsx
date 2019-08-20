import React from 'react'
import Icon from '../Icon'
import ContextMenuButtonStyle from './ContextMenuButtonStyle'

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
    <ContextMenuButtonStyle {...{ id }} {...otherProps}>
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
    </ContextMenuButtonStyle>
  )
}

export default ContextMenuButton
