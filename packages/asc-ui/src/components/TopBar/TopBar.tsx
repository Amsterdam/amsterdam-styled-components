import React from 'react'
import TopBarStyle, { Props } from '../../styles/components/TopBarStyle'

const TopBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <TopBarStyle {...otherProps}>{children}</TopBarStyle>
)

export default TopBar
