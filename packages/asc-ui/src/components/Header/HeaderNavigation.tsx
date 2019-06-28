import React from 'react'
import HeaderNavigationStyle from './HeaderNavigationStyle'

const HeaderNavigation: React.FC<{}> = ({ children }) => (
  <HeaderNavigationStyle>{children}</HeaderNavigationStyle>
)

export default HeaderNavigation
