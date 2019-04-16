import React from 'react'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'

type Props = HeaderStyleProps

const HeaderSearch: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderStyle {...otherProps}>HeaderSearch{children}</HeaderStyle>
)

export default HeaderSearch
