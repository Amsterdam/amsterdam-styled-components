import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import type { Position } from './types'
import ContextMenuListStyle, {
  ContextMenuListWrapperStyle,
} from './ContextMenuListStyle'

interface Props {
  open?: boolean
  onClose: () => void
  position?: Position
  label?: string
  icon?: ReactNode
}

export default forwardRef<
  HTMLDivElement,
  Props & HTMLAttributes<HTMLDivElement>
>(({ children, position, open, onClose, ...otherProps }, ref) => (
  <ContextMenuListWrapperStyle
    ref={ref}
    role="menu"
    tabIndex={-1}
    aria-hidden={!open}
    onBlur={() => onClose()}
    position={position}
    open={open}
    {...otherProps}
  >
    <ContextMenuListStyle>{children}</ContextMenuListStyle>
  </ContextMenuListWrapperStyle>
))
