import React from 'react'
import HeaderLinksStyle from './HeaderLinksStyle'

const HeaderLinks: React.FC<{}> = ({ children }) => (
  <HeaderLinksStyle>{children}</HeaderLinksStyle>
)

export default HeaderLinks
