import type { PropsWithChildren } from 'react'
import { useMemo } from 'react'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import type { Props } from './MenuToggleStyle'
import MenuToggleStyle from './MenuToggleStyle'
import Toggle from '../../Toggle/Toggle'
import useOptionalControlledState from '../../../utils/hooks/useOptionalControlledState'

function MenuToggle({
  children,
  onExpand,
  align = 'left',
  open,
  ariaLabel,
  ...otherProps
}: PropsWithChildren<Props>) {
  const [menuOpen, setMenuOpen] = useOptionalControlledState(open, onExpand)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const onOpen = (isOpen: boolean) => {
    if (!isOpen) {
      setMenuOpen(false)
    }
  }

  const value = useMemo(
    () => ({
      underFlyOutMenu: false,
      hasToggle: true,
      setOpenToggle: () => {
        setMenuOpen(false)
      },
    }),
    [setMenuOpen],
  )

  return (
    <MenuContext.Provider value={value}>
      <Toggle
        as={MenuToggleStyle}
        onOpen={onOpen}
        onClick={toggleMenu}
        align={align}
        open={menuOpen}
        ariaLabel={ariaLabel || 'Menu'}
        {...otherProps}
      >
        <MenuList>{children}</MenuList>
      </Toggle>
    </MenuContext.Provider>
  )
}

MenuToggle.defaultProps = {
  align: 'left',
  open: false,
}

export default MenuToggle
