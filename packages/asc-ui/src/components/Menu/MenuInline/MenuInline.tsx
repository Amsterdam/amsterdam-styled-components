import React from 'react'
import MenuInlineStyle, { Props } from './MenuInlineStyle'
import MenuContext from '../MenuContext'
import BackDrop from '../../BackDrop/BackDrop'

const MenuInline: React.FC<Props> = ({
  children,
  onExpand,
  hasBackDrop,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleOnExpand = (expand: boolean) => {
    setMenuOpen(expand)

    return onExpand && onExpand(expand)
  }

  return (
    <MenuContext.Provider
      value={{
        onExpand: handleOnExpand,
      }}
    >
      <MenuInlineStyle hasBackDrop={hasBackDrop} {...otherProps}>
        {children}
      </MenuInlineStyle>
      {hasBackDrop && menuOpen && (
        <BackDrop onClick={handleOnExpand} disablePortal />
      )}
    </MenuContext.Provider>
  )
}

export default MenuInline
