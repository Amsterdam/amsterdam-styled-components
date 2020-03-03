import React from 'react'
import { ChevronDown } from '@datapunt/asc-assets'
import Icon from '../Icon'
import ContextMenuButtonStyle from './ContextMenuButtonStyle'
import { Props } from './ContextMenu'

const ContextMenuButton: React.FC<Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  id,
  label,
  position,
  icon,
  arrowIcon,
  open,
  ...otherProps
}) => (
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

ContextMenuButton.defaultProps = {
  arrowIcon: <ChevronDown />,
}

export default ContextMenuButton
