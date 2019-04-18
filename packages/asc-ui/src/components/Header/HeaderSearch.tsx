import React from 'react'
import HeaderSearchStyle from '../../styles/components/HeaderStyle/HeaderSearchStyle'

type Props = {}

const HeaderSearch: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderSearchStyle {...otherProps}>{children}</HeaderSearchStyle>
)

export default HeaderSearch
