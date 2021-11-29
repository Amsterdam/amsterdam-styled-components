import type { FunctionComponent } from 'react'
import type { Props as TopBarStyleProps } from './TopBarStyle'
import TopBarStyle from './TopBarStyle'

type Props = TopBarStyleProps

const TopBar: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <TopBarStyle {...otherProps}>{children}</TopBarStyle>
)

export default TopBar
