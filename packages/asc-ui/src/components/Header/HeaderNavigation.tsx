import type { ReactNode } from 'react'
import HeaderNavigationStyle from './HeaderNavigationStyle'

interface Props {
  children?: ReactNode
}

function HeaderNavigation({ children }: Props) {
  return <HeaderNavigationStyle>{children}</HeaderNavigationStyle>
}

export default HeaderNavigation
