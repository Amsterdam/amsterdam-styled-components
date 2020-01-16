import React from 'react'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import MenuToggleStyle, { Props } from './MenuToggleStyle'
import Toggle from '../../Toggle/Toggle'
import useOptionalControlledState from '../../../utils/hooks/useOptionalControlledState'

const MenuToggle: React.FC<Props> = ({
  children,
  onExpand,
  align = 'left',
  open,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = useOptionalControlledState(open, onExpand)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const onOpen = (isOpen: boolean) => {
    if (!isOpen) {
      setMenuOpen(false)
    }
  }

  return (
    <MenuContext.Provider
      value={{
        underFlyOutMenu: false,
        hasToggle: true,
        setOpenToggle: () => {
          setMenuOpen(false)
        },
      }}
    >
      <Toggle
        as={MenuToggleStyle}
        onOpen={onOpen}
        onClick={toggleMenu}
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
  open: false,
}

export default MenuToggle
