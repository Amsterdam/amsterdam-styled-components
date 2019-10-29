import React from 'react'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import MenuToggleStyle, { Props } from './MenuToggleStyle'
import Toggle from '../../Toggle/Toggle'

const MenuToggle: React.FC<Props> = ({
  children,
  onExpand,
  align = 'left',
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
}

export default MenuToggle
