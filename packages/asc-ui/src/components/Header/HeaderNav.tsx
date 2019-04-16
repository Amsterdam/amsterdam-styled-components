import React from 'react'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'

type Props = HeaderStyleProps

const HeaderNav: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderStyle {...otherProps}>
HeaderNav
{children}
</HeaderStyle>
)

export default HeaderNav
