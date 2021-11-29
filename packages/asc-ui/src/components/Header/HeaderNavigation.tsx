import type { FunctionComponent } from 'react'
import HeaderNavigationStyle from './HeaderNavigationStyle'

const HeaderNavigation: FunctionComponent = ({ children }) => (
  <HeaderNavigationStyle>{children}</HeaderNavigationStyle>
)

export default HeaderNavigation
