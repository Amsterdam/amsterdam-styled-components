import React from 'react'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import MenuToggleStyle, { Props } from './MenuToggleStyle'
import Toggle from '../../Toggle/Toggle'
import BackDrop from '../../BackDrop/BackDrop'

const MenuToggle: React.FC<Props> = ({
  children,
  onExpand,
  align = 'left',
  hasBackDrop,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const onOpen = (open: boolean) => {
    if (!open) {
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

  const Element = hasBackDrop && menuOpen ? BackDrop : React.Fragment

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
      <Element onClick={toggleMenu}>
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
      </Element>
    </MenuContext.Provider>
  )
}

MenuToggle.defaultProps = {
  align: 'left',
}

export default MenuToggle
