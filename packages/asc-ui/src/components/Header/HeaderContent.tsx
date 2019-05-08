import React from 'react'
import HeaderContentStyle from '../../styles/components/HeaderStyle/HeaderContentStyle'

const HeaderContent: React.FC<{}> = ({ children }) => (
  <HeaderContentStyle>{children}</HeaderContentStyle>
)

export default HeaderContent
