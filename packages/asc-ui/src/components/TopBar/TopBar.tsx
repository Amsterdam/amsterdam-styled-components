import React from 'react'
import TopBarStyle, { Props as TopBarStyleProps } from './TopBarStyle'

type Props = TopBarStyleProps

const TopBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <TopBarStyle {...otherProps}>{children}</TopBarStyle>
)

export default TopBar
