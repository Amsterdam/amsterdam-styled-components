import type { HTMLAttributes } from 'react'
import HeaderLinksStyle from './HeaderLinksStyle'

function HeaderLinks({
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  return <HeaderLinksStyle {...otherProps}>{children}</HeaderLinksStyle>
}

export default HeaderLinks
