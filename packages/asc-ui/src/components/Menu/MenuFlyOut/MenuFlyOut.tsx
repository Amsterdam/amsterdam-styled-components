import React from 'react'
import { ChevronDown, ChevronUp } from '@datapunt/asc-assets'
import MenuList from '../MenuList/MenuList'
import MenuContext, { useMenuContext } from '../MenuContext'
import ownerDocument from '../../../utils/ownerDocument'
import MenuFlyOutStyle, { Props as MenuFlyOutProps } from './MenuFlyOutStyle'
import useEdgeDetection from '../../../utils/hooks/useEdgeDetection'
import useDebounce from '../../../utils/hooks/useDebounce'
import { KeyboardKeys } from '../../../types/index'
import MenuButton from '../MenuButton/MenuButton'
import useFocusWithArrows from '../../../utils/hooks/useFocusWithArrows'

type Props = {
  label: string
} & MenuFlyOutProps

const MenuFlyOut: React.FC<Props> = ({ children, label, ...otherProps }) => {
  const { hasToggle, onExpand, setOpenToggle } = useMenuContext()

  const ref = React.useRef<HTMLLIElement>(null)

  const [menuOpen, setMenuOpen] = React.useState(false)

  const { keyDown } = useFocusWithArrows(ref)

  const setOpen = useDebounce(setMenuOpen, 0)

  const onHandleOpen = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()

    setOpen(!menuOpen)
  }

  const onHandleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === KeyboardKeys.Enter || event.key === KeyboardKeys.Space) {
      onHandleOpen(event)
    }
  }

  const onBlurHandler = useDebounce(() => {
    const element = ref && (ref.current as HTMLLIElement)
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

  const [listRef, edgeDetection] = useEdgeDetection([menuOpen])

  const handleOnExpand = React.useCallback(
    open => onExpand && onExpand(open),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    handleOnExpand(menuOpen)
  }, [menuOpen, handleOnExpand])

  return (
    <MenuFlyOutStyle
      ref={ref}
      onBlur={onBlurHandler}
      hasToggle={hasToggle}
      onKeyDown={keyDown}
      {...extraEvents}
      {...otherProps}
    >
      <MenuButton
        iconRight={
          // eslint-disable-next-line no-nested-ternary
          hasToggle ? menuOpen ? <ChevronUp /> : <ChevronDown /> : undefined
        }
        onClick={onHandleOpen}
        onKeyDown={onHandleKeyDown}
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
