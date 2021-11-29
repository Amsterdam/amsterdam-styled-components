import type { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import ContextMenuButtonStyle from './ContextMenuButton'
import MenuList from './ContextMenuList'
import ownerDocument from '../../utils/ownerDocument'
import type { Position } from './types'
import ContextMenuWrapperStyle from './ContextMenuWrapperStyle'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'
import useDetectTouchscreen from '../../utils/hooks/useDetectTouchScreen'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'

export interface Props {
  position?: Position
  label?: string
  icon?: ReactNode
  arrowIcon?: ReactNode
  selectElementForTouchScreen?: ReactNode
  open?: boolean
}

const ContextMenu: FunctionComponent<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className,
  open: openProp = false,
  label,
  children,
  position,
  selectElementForTouchScreen,
  ...otherProps
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(openProp)
  const isTouchScreen = useDetectTouchscreen()

  // Set state with 'open' prop if it's set
  useEffect(() => {
    if (openProp !== open) {
      setOpen(openProp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const { keyDown: focusWithArrowKeys } = useFocusWithArrows(ref, true)
  const { onKeyDown: closeOnEscape } = useActionOnEscape(() => {
    setOpen(false)
  })

  return (
    <ContextMenuWrapperStyle
      ref={ref}
      onKeyDown={(e) => {
        focusWithArrowKeys(e)
        closeOnEscape(e)
      }}
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
