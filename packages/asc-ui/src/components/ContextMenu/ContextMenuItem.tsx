import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { ContextMenuItemProps } from './ContextMenuItemStyle'
import ContextMenuItemStyle, {
  ContextMenuItemButton,
} from './ContextMenuItemStyle'

type Props = {
  icon?: ReactNode
} & ContextMenuItemProps &
  ButtonHTMLAttributes<HTMLButtonElement>

function ContextMenuItem({ children, icon, divider, ...otherProps }: Props) {
  return (
    <ContextMenuItemStyle divider={divider}>
      <ContextMenuItemButton type="button" {...otherProps}>
        {icon && icon}
        {children}
      </ContextMenuItemButton>
    </ContextMenuItemStyle>
  )
}

export default ContextMenuItem
