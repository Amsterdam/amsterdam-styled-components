import type { FunctionComponent } from 'react'
import { useState } from 'react'
import type { Props } from './MenuInlineStyle'
import MenuInlineStyle from './MenuInlineStyle'
import MenuContext from '../MenuContext'
import type { Props as BackDropProps } from '../../BackDrop/BackDrop'
import BackDrop from '../../BackDrop/BackDrop'
import useDebounce from '../../../utils/hooks/useDebounce'

const MenuInline: FunctionComponent<Props & BackDropProps> = ({
  children,
  onExpand,
  hasBackDrop,
  backdropOpacity,
  zIndexOffset,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

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
      {hasBackDrop && menuOpen && (
        <BackDrop
          onClick={handleOnExpand}
          backdropOpacity={backdropOpacity}
          zIndexOffset={zIndexOffset}
        />
      )}
    </MenuContext.Provider>
  )
}

export default MenuInline
