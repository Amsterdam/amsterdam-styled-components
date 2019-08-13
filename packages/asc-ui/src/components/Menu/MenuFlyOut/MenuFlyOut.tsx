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

type Props = {
  label: string
} & MenuFlyOutProps

const MenuFlyOut: React.FC<Props> = ({ children, label, ...otherProps }) => {
  const { hasToggle, onExpand, setOpenToggle } = useMenuContext()

  const ref = React.useRef<HTMLLIElement>(null)

  const [isOpen, setOpenFn] = React.useState(false)
  const [isOpenOnClick, setOpenOnClick] = React.useState(false)

  const setOpen = useDebounce(setOpenFn, 0)

  const flyOutOpen = isOpen || isOpenOnClick

  const onHandleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()

    if (hasToggle) {
      setOpen(isOpen ? false : isOpen)
      setOpenOnClick(!isOpenOnClick)
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
      hasToggle={hasToggle}
      {...extraEvents}
      {...otherProps}
    >
      <MenuButton
        iconRight={
          // eslint-disable-next-line no-nested-ternary
          hasToggle ? flyOutOpen ? <ChevronUp /> : <ChevronDown /> : undefined
        }
        onFocus={() => setOpen(true)}
        onClick={onHandleToggle}
        onKeyDown={onHandleKeyDown}
        aria-haspopup="true"
        aria-expanded={flyOutOpen}
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
