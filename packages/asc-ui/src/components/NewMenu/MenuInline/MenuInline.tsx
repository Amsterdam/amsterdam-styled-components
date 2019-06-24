import React from 'react'
import MenuInlineStyle, { Props } from './MenuInlineStyle'

const MenuInline: React.FC<Props> = ({ children, ...otherProps }) => (
  <MenuInlineStyle {...otherProps}>{children}</MenuInlineStyle>
)

export default MenuInline
