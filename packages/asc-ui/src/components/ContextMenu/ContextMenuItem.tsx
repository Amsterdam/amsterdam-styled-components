import type { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import type { ContextMenuItemProps } from './ContextMenuItemStyle'
import ContextMenuItemStyle, {
  ContextMenuItemButton,
} from './ContextMenuItemStyle'

type Props = {
  icon?: ReactNode
} & ContextMenuItemProps &
  ButtonHTMLAttributes<HTMLButtonElement>

const ContextMenuItem: FunctionComponent<Props> = ({
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
