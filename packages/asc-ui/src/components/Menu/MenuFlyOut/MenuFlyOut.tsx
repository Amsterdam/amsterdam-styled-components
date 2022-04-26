import { ChevronDown, ChevronUp } from '@amsterdam/asc-assets'
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { KeyboardKeys } from '../../../types/index'
import useDebounce from '../../../utils/hooks/useDebounce'
import useEdgeDetection from '../../../utils/hooks/useEdgeDetection'
import useFocusWithArrows from '../../../utils/hooks/useFocusWithArrows'
import ownerDocument from '../../../utils/ownerDocument'
import MenuButton from '../MenuButton/MenuButton'
import MenuContext, { useMenuContext } from '../MenuContext'
import MenuList from '../MenuList/MenuList'
import type { Props as MenuFlyOutProps } from './MenuFlyOutStyle'
import MenuFlyOutStyle from './MenuFlyOutStyle'

type Props = {
  label: string
} & MenuFlyOutProps

function MenuFlyOut({ children, label, ...otherProps }: Props) {
  const { hasToggle, onExpand, setOpenToggle } = useMenuContext()

  const ref = useRef<HTMLLIElement>(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const setOpen = useDebounce(setMenuOpen, 0)

  const { keyDown: keyDownArrowFocus } = useFocusWithArrows(ref)

  const onKeyDownEventHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KeyboardKeys.Escape) {
        setOpen(false)
      }
    },
    [setOpen],
  )

  // We need to close the menu in case user hovers or focuses on the menu and press escape
  // Todo: we need to move this to a higher component, as this unnecessarily will add multiple eventlisteners
  useEffect(() => {
    window.addEventListener('keydown', onKeyDownEventHandler)
    return () => {
      window.removeEventListener('keydown', onKeyDownEventHandler)
    }
  }, [onKeyDownEventHandler])

  const onHandleOpen = (e: ReactMouseEvent | ReactKeyboardEvent) => {
    e.preventDefault()

    setOpen(!menuOpen)
  }

  const onHandleKeyDownButton = (event: ReactKeyboardEvent) => {
    if (event.key === KeyboardKeys.Enter || event.key === KeyboardKeys.Space) {
      onHandleOpen(event)
    }
  }

  const onBlurHandler = useDebounce(() => {
    const element = ref && ref.current
    if (element) {
      const currentFocus = ownerDocument(element).activeElement

      if (!element.contains(currentFocus)) {
        setOpen(false)
      }
    }
  })

  const extraEvents = !hasToggle
    ? {
        onMouseOver: () => setOpen(true),
        onMouseOut: () => setOpen(false),
      }
    : {}

  const [listRef, edgeDetection] = useEdgeDetection<HTMLUListElement>(
    [menuOpen],
    { top: false, right: true, bottom: false, left: true },
  )

  const handleOnExpand = useCallback(
    (open) => onExpand && onExpand(open),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useEffect(() => {
    handleOnExpand(menuOpen)
  }, [menuOpen, handleOnExpand])

  return (
    <MenuFlyOutStyle
      ref={ref}
      data-testid="flyout"
      onBlur={onBlurHandler}
      hasToggle={hasToggle}
      onKeyDown={keyDownArrowFocus}
      {...extraEvents}
      {...otherProps}
    >
      <MenuButton
        iconRight={
          // eslint-disable-next-line no-nested-ternary
          hasToggle ? menuOpen ? <ChevronUp /> : <ChevronDown /> : undefined
        }
        data-testid="flyoutButton"
        onClick={onHandleOpen}
        onKeyDown={onHandleKeyDownButton}
        aria-haspopup="true"
        aria-expanded={menuOpen}
      >
        {label}
      </MenuButton>
      <MenuContext.Provider
        value={{
          underFlyOutMenu: true,
          hasToggle,
          setOpenToggle: (val: boolean) => {
            if (setOpenToggle) {
              setOpenToggle(val)
            }
            setOpen(val)
          },
        }}
      >
        <MenuList
          ref={listRef}
          edgeDetection={edgeDetection}
          aria-hidden={!menuOpen}
        >
          {children}
        </MenuList>
      </MenuContext.Provider>
    </MenuFlyOutStyle>
  )
}

export default MenuFlyOut
