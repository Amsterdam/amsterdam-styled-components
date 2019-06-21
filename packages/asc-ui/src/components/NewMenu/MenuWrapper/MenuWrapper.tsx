import React from 'react'
import MenuWrapperStyle from './MenuWrapperStyle'

const MenuWrapper: React.FC<{}> = ({ children, ...otherProps }) => (
  <MenuWrapperStyle {...otherProps}>{children}</MenuWrapperStyle>
)

export default MenuWrapper
