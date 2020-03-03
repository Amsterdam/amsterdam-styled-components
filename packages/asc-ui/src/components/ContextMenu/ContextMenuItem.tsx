import React from 'react'
import ContextMenuItemStyle, {
  ContextMenuItemButton,
  ContextMenuItemProps,
} from './ContextMenuItemStyle'

type Props = {
  onClick?: (e: React.MouseEvent) => void
  role?: string
  icon?: React.ReactNode
} & ContextMenuItemProps

const ContextMenuItem: React.FC<Props> = ({
  children,
  icon,
  onClick,
  ...otherProps
}) => (
  <ContextMenuItemStyle {...otherProps}>
    <ContextMenuItemButton type="button" onClick={onClick}>
      {icon && icon}
      {children}
    </ContextMenuItemButton>
  </ContextMenuItemStyle>
)

export default ContextMenuItem
