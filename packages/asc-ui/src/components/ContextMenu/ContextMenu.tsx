import React, { FunctionComponent, useEffect, useState } from 'react'
import ContextMenuButtonStyle from './ContextMenuButton'
import MenuList from './ContextMenuList'
import ownerDocument from '../../utils/ownerDocument'
import { Position } from './types'
import ContextMenuWrapperStyle from './ContextMenuWrapperStyle'
import ContextMenuItem from './ContextMenuItem'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'
import useDetectTouchscreen from '../../utils/hooks/useDetectTouchScreen'
import { deprecatedWarning } from '../../utils'

export type Props = {
  position?: Position
  label?: string
  icon?: React.ReactNode
  arrowIcon?: React.ReactNode
  selectElementForTouchScreen?: React.ReactNode
  open?: boolean
}

const ContextMenu: FunctionComponent<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className,
  open: openProp = false,
  label,
  children,
  position,
  selectElementForTouchScreen,
  ...otherProps
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(openProp)
  const isTouchScreen = useDetectTouchscreen()

  useEffect(() => {
    React.Children.toArray(children).forEach((child) => {
      // @ts-ignore
      if (child && child.type !== ContextMenuItem) {
        deprecatedWarning(
          'You are rendering a different component type in <ContextMenu /> other than <ContextMenuItem />.',
        )
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Set state with 'open' prop if it's set
  useEffect(() => {
    if (openProp !== open) {
      setOpen(openProp)
    }
  }, [openProp])

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
        disabled={!!(selectElementForTouchScreen && isTouchScreen)}
        {...otherProps}
      />
      {((selectElementForTouchScreen && !isTouchScreen) ||
        !selectElementForTouchScreen) && (
        <MenuList
          {...{
            position,
            open,
            onClose,
          }}
        >
          {children}
        </MenuList>
      )}
      {isTouchScreen &&
        selectElementForTouchScreen &&
        selectElementForTouchScreen}
    </ContextMenuWrapperStyle>
  )
}

export default ContextMenu
