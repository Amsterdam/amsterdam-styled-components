import React from 'react'
import HeaderContentStyle from './HeaderContentStyle'

const HeaderContent: React.FC<{}> = ({ children }) => (
  <HeaderContentStyle>{children}</HeaderContentStyle>
)

export default HeaderContent
