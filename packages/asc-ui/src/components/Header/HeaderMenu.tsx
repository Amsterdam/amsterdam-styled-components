import React from 'react'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'

type Props = HeaderStyleProps

const HeaderMenu: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderStyle {...otherProps}>HeaderMenu
  {children}</HeaderStyle>
)

export default HeaderMenu
