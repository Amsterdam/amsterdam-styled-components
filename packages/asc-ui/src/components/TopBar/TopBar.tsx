import React, { FunctionComponent } from 'react'
import TopBarStyle, { Props as TopBarStyleProps } from './TopBarStyle'

type Props = TopBarStyleProps

const TopBar: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <TopBarStyle {...otherProps}>{children}</TopBarStyle>
)

export default TopBar
