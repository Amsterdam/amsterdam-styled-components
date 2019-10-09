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

  const [isOpen, setOpen] = React.useState(false)
  const [isOpenOnClick, setOpenOnClick] = React.useState(false)

  const flyOutOpen = isOpen || isOpenOnClick

  const onHandleOpen = useDebounce((val: boolean) => {
    if (setOpenToggle) {
      setOpenToggle(val)
    }

    setOpen(val)
    setOpenOnClick(val)
  })

  const onHandleToggle = useDebounce(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault()

      if (hasToggle) {
        setOpen(!flyOutOpen)
        setOpenOnClick(!flyOutOpen)
      } else {
        // Flyouts can't be closed by clicking on them
        onHandleOpen(true)
      }
    },
  )

  const onHandleKeyDown = useDebounce((e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter || e.key === KeyboardKeys.Space) {
      onHandleToggle(e)
    }
  })

  const onBlurHandler = useDebounce(() => {
    const element = ref && (ref.current as HTMLLIElement)

    if (element && !hasToggle) {
      const currentFocus = ownerDocument(element).activeElement

      if (!element.contains(currentFocus)) {
        onHandleOpen(false)
      }
    }
  })

  const extraEvents = !hasToggle
    ? {
        onMouseOver: () => onHandleOpen(true),
        onMouseOut: () => onHandleOpen(false),
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
          setOpenToggle: onHandleOpen,
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
