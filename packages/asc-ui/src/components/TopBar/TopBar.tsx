import type { Props as TopBarStyleProps } from './TopBarStyle'
import TopBarStyle from './TopBarStyle'

type Props = TopBarStyleProps

function TopBar({ children, ...otherProps }: Props) {
  return <TopBarStyle {...otherProps}>{children}</TopBarStyle>
}

export default TopBar
