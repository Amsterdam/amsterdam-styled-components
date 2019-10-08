import React from 'react'
import MenuInlineStyle, { Props as StyleProps } from './MenuInlineStyle'
import MenuContext from '../MenuContext'
import BackDropStyle from '../../BackDrop'

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
    <MenuContext.Provider
      value={{
        onExpand,
        setOpenToggle: (val: any) => {
          setMenuOpen(val)
        },
      }}
    >
      <MenuInlineStyle {...otherProps}>{children}</MenuInlineStyle>
      {hasBackDrop && menuOpen && <BackDropStyle />}
    </MenuContext.Provider>
  )
}

export default MenuInline
