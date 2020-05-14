import React from 'react'
import MenuInlineStyle, { Props } from './MenuInlineStyle'
import MenuContext from '../MenuContext'
import BackDrop from '../../BackDrop/BackDrop'
import useDebounce from '../../../utils/hooks/useDebounce'

const MenuInline: React.FC<Props> = ({
  children,
  onExpand,
  hasBackDrop,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  // prevents the component from flickering when you hover to the next menu items
  const handleOnExpand = useDebounce((expand: boolean) => {
    setMenuOpen(expand)

    return onExpand && onExpand(expand)
  }, 50)

  return (
    <MenuContext.Provider
      value={{
        onExpand: handleOnExpand,
      }}
    >
      <MenuInlineStyle hasBackDrop={hasBackDrop} {...otherProps}>
        {children}
      </MenuInlineStyle>
      {hasBackDrop && menuOpen && <BackDrop onClick={handleOnExpand} />}
    </MenuContext.Provider>
  )
}

export default MenuInline
