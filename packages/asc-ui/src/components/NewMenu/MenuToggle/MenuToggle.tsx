import React from 'react'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import useFocussedChildren from '../useFocussedChildren'
import useKeysToFocus from '../useKeysToFocus'
import MenuToggleStyle, { Props } from './MenuToggleStyle'
import Toggle from '../../Toggle/Toggle'

const MenuToggle: React.FC<Props> = ({
  children: childrenProps,
  onExpand,
  align = 'left',
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeChild, setActiveChild] = React.useState(0)
  const { children, filteredChildren } = useFocussedChildren(childrenProps)
  const toggleMenu = () => {
    setActiveChild(0)
    setMenuOpen(!menuOpen)
  }

  const { onKeyDown } = useKeysToFocus(
    filteredChildren,
    activeChild,
    setActiveChild,
    setMenuOpen,
  )

  const onOpen = (open: boolean) => {
    if (!open) {
      setActiveChild(0)
      setMenuOpen(false)
    }
  }

  const handleOnExpand = React.useCallback(
    open => onExpand && onExpand(open),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    handleOnExpand(menuOpen)
  }, [handleOnExpand, menuOpen])

  return (
    <MenuContext.Provider
      value={{
        activeChild,
        setActiveToggleChild: setActiveChild,
        underFlyOutMenu: false,
        hasToggle: true,
        setOpenToggle: () => {
          setActiveChild(0)
          setMenuOpen(false)
        },
      }}
    >
      <Toggle
        as={MenuToggleStyle}
        tabIndex={0}
        onOpen={onOpen}
        onClick={toggleMenu}
        onKeyDown={onKeyDown}
        align={align}
        open={menuOpen}
        {...otherProps}
      >
        <MenuList>{children}</MenuList>
      </Toggle>
    </MenuContext.Provider>
  )
}

MenuToggle.defaultProps = {
  align: 'left',
}

export default MenuToggle
