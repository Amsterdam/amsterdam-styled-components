import React from 'react'
import ContextMenuItemStyle, {
  ContextMenuItemButton,
  ContextMenuItemProps,
} from './ContextMenuItemStyle'

type Props = {
  icon?: React.ReactNode
} & ContextMenuItemProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const ContextMenuItem: React.FC<Props> = ({
  children,
  icon,
  divider,
  ...otherProps
}) => (
  <ContextMenuItemStyle divider={divider}>
    <ContextMenuItemButton type="button" {...otherProps}>
      {icon && icon}
      {children}
    </ContextMenuItemButton>
  </ContextMenuItemStyle>
)

export default ContextMenuItem
