import React from 'react'
import MenuInlineStyle, { Props } from './MenuInlineStyle'
import MenuContext from '../MenuContext'

const MenuInline: React.FC<Props> = ({ children, onExpand, ...otherProps }) => {
  return (
    <MenuContext.Provider
      value={{
        onExpand,
      }}
    >
      <MenuInlineStyle {...otherProps}>{children}</MenuInlineStyle>
    </MenuContext.Provider>
  )
}

export default MenuInline
