import React from 'react'
import { MenuItem } from '../..'

type Props = {
  focused?: boolean
  onClick?: Function
  role?: string
  icon?: React.ReactNode
  divider?: boolean
  children?: any
}

const ContextMenuItem = ({ children, icon, onClick, ...otherProps }: Props) => (
  <MenuItem onClick={onClick} {...otherProps}>
    {icon && icon}
    {children}
  </MenuItem>
)

export default ContextMenuItem
