import React, { useEffect, useState } from 'react'
import ContextMenuButtonStyle from './ContextMenuButton'
import MenuList from './ContextMenuList'
import ownerDocument from '../../utils/ownerDocument'
import { Position } from './types'
import ContextMenuWrapperStyle from './ContextMenuWrapperStyle'
import ContextMenuItem from './ContextMenuItem'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'

export type Props = {
  position?: Position
  label?: string
  icon?: React.ReactNode
  arrowIcon?: React.ReactNode
  open?: boolean
}

const ContextMenu: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className,
  open: openProp,
  label,
  children,
  position,
  ...otherProps
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(openProp || false)

  useEffect(() => {
    React.Children.toArray(children).forEach((child) => {
      // @ts-ignore
      if (child && child.type !== ContextMenuItem) {
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: you are rendering a different component type in <ContextMenu /> other than <ContextMenuItem />.',
        )
      }
    })
  }, [])

  const onToggle = () => {
    setOpen(!open)
  }

  const onClose = () => {
    // To prevent the component to close before setting the focus on the children when tabbing or using arrow keys
    setTimeout(() => {
      const element = ref.current
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          setOpen(false)
        }
      }
    })
  }

  const { keyDown } = useFocusWithArrows(ref, true)

  return (
    <ContextMenuWrapperStyle
      ref={ref}
      onKeyDown={keyDown}
      onBlur={onClose}
      className={className}
    >
      <ContextMenuButtonStyle
        {...{
          open,
          position,
          label,
        }}
        data-testid="toggle"
        onClick={onToggle}
        {...otherProps}
      />
      <MenuList
        {...{
          position,
          open,
          onClose,
        }}
      >
        {children}
      </MenuList>
    </ContextMenuWrapperStyle>
  )
}

export default ContextMenu
