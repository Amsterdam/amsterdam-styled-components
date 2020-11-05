import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from 'react'
import ContextMenuItemStyle, {
  ContextMenuItemButton,
  ContextMenuItemProps,
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
