import React from 'react'
import { ChevronDown, ChevronUp } from '@datapunt/asc-assets'
import MenuItemLink from '../MenuItemLink/MenuItemLink'
import MenuList from '../MenuList/MenuList'
import MenuContext, { useMenuContext } from '../MenuContext'
import useMenuFocus from '../useMenuFocus'
import useFocussedChildren from '../useFocussedChildren'
import useKeysToFocus from '../useKeysToFocus'
import ownerDocument from '../../../utils/ownerDocument'
import MenuFlyOutStyle from './MenuFlyOutStyle'
import Icon from '../../Icon'
import useEdgeDetection from '../../../utils/useEdgeDetection'
import useDebounce from '../../../utils/useDebounce'
import { KeyboardKeys } from '../../../types/index'

const MenuFlyOut = ({ children: childrenProps, label, linkIndex }: any) => {
  const { hasToggle, setActiveToggleChild, onExpand } = useMenuContext()

  const ref = React.useRef<HTMLLIElement>(null)
  const [isOpen, setOpenFn] = React.useState(false)
  const setOpen = useDebounce(setOpenFn, 0)
  const [linkRef, setLinkRef] = React.useState(null)
  const [isOpenOnClick, setOpenOnClick] = React.useState(false)
  const [activeChild, setActiveChild] = React.useState(0)
  const flyOutOpen = isOpen || isOpenOnClick

  const { children, filteredChildren } = useFocussedChildren(childrenProps)
  const { onKeyDown } = useKeysToFocus(
    filteredChildren,
    activeChild,
    setActiveChild,
    setOpen,
    linkRef,
  )
  useMenuFocus(linkRef, linkIndex)

  const onHandleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()
    if (hasToggle) {
      setOpen(isOpen ? false : isOpen)
      setOpenOnClick(!isOpenOnClick)

      // @ts-ignore
      setActiveToggleChild(linkIndex)
    } else {
      setOpenOnClick(true)
    }
  }

  const onHandleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === KeyboardKeys.Enter || event.key === KeyboardKeys.Space) {
      onHandleToggle(event)
    }
  }

  const onBlurHandler = useDebounce(() => {
    const element = ref && (ref.current as HTMLLIElement)
    if (element) {
      const currentFocus = ownerDocument(element).activeElement

      if (!element.contains(currentFocus)) {
        setOpen(false)
        setOpenOnClick(false)
        setActiveChild(0)
      }
    }
  })

  const extraEvents = !hasToggle
    ? {
        onMouseOver: () => setOpen(true),
        onMouseOut: () => setOpen(false),
      }
    : {}

  const [listRef, edgeDetection] = useEdgeDetection([flyOutOpen])

  const handleOnExpand = React.useCallback(
    open => onExpand && onExpand(open),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    handleOnExpand(flyOutOpen)
  }, [flyOutOpen, handleOnExpand])

  return (
    <MenuFlyOutStyle
      ref={ref}
      onBlur={onBlurHandler}
      onKeyDown={onKeyDown}
      hasToggle={hasToggle}
      tabIndex={-1}
      {...extraEvents}
    >
      <MenuItemLink
        element="span"
        iconRight={
          hasToggle ? (
            <Icon size={14}>
              {flyOutOpen ? <ChevronUp /> : <ChevronDown />}
            </Icon>
          ) : (
            undefined
          )
        }
        tabIndex={0}
        isActive={flyOutOpen}
        setCurrentLinkRef={setLinkRef}
        onFocus={() => setOpen(true)}
        onClick={onHandleToggle}
        onKeyDown={onHandleKeyDown}
        ignoreCloseOnClick
        aria-haspopup="true"
        aria-expanded={flyOutOpen}
      >
        {label}
      </MenuItemLink>
      <MenuContext.Provider
        value={{
          activeChild,
          setActiveChild,
          underFlyOutMenu: true,
          hasToggle,
          setOpenToggle: (val: boolean) => {
            setOpen(val)
            setOpenOnClick(val)
          },
        }}
      >
        <MenuList
          ref={listRef}
          edgeDetection={edgeDetection}
          aria-hidden={!flyOutOpen}
        >
          {children}
        </MenuList>
      </MenuContext.Provider>
    </MenuFlyOutStyle>
  )
}

export default MenuFlyOut
