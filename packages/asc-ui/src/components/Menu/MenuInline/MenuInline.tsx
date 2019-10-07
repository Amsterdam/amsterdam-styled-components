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
  hasBackDrop,
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <Portal visible={hasBackDrop && menuOpen}>
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
      {hasBackDrop && menuOpen && <BackDropStyle />}
    </Portal>
  )
}

export default MenuInline
