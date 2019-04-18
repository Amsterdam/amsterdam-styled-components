import * as React from 'react'
import HeaderMenuStyle from '../../styles/components/HeaderStyle/HeaderMenuStyle'

type Props = {}

const HeaderMenu: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderMenuStyle {...otherProps}>{children}</HeaderMenuStyle>
)

export default HeaderMenu
