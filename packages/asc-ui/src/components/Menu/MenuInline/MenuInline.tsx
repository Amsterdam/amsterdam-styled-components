import React from 'react'
import MenuInlineStyle, { Props as StyleProps } from './MenuInlineStyle'
import MenuContext from '../MenuContext'
import BackDropStyle from '../../BackDrop'
import Portal from '../../Portal'

export type Props = {
  onExpand?: Function
  hasBackDrop?: boolean
} & StyleProps

const MenuInline: React.FC<Props> = ({
  children,
  onExpand,
  hasBackDrop = false,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div style={{ position: 'relative', zIndex: 9999 }}>
      <MenuContext.Provider
        value={{
          onExpand,
          setOpenToggle: (val: any) => {
            setMenuOpen(val)
          },
        }}
      >
        <MenuInlineStyle {...otherProps}>{children}</MenuInlineStyle>
      </MenuContext.Provider>
      {hasBackDrop && menuOpen && (
        <Portal>
          <BackDropStyle onClick={() => setMenuOpen(!menuOpen)} />
        </Portal>
      )}
    </div>
  )
}

export default MenuInline
