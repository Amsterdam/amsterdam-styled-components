import React from 'react'
import TopBarStyle, {
  TopBarStyleProps,
} from '../../styles/components/TopBarStyle'

type Props = TopBarStyleProps

const TopBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <TopBarStyle {...otherProps}>{children}</TopBarStyle>
)

export default TopBar
