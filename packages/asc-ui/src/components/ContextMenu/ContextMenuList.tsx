import React, { forwardRef } from 'react'
import { Position } from './types'
import ContextMenuListStyle, {
  ContextMenuListWrapperStyle,
} from './ContextMenuListStyle'

type Props = {
  open?: boolean
  onClose: Function
  position?: Position
  label?: string
  icon?: React.ReactNode
}

export default forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>(({ children, position, open, onClose, ...otherProps }, ref) => (
  <ContextMenuListWrapperStyle
    ref={ref}
    role="menu"
    tabIndex={-1}
    aria-hidden={!open}
    onBlur={() => onClose()}
    position={position}
    {...otherProps}
  >
    <ContextMenuListStyle>{children}</ContextMenuListStyle>
  </ContextMenuListWrapperStyle>
))
