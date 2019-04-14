import React from 'react'
import StyledTopBar, { Props } from '../../styles/components/StyledTopBar'

const TopBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <StyledTopBar {...otherProps}>{children}</StyledTopBar>
)

export default TopBar
