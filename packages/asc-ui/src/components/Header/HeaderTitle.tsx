import type { AnchorHTMLAttributes } from 'react'
import HeaderTitleStyle from './HeaderTitleStyle'

function HeaderTitle({
  children,
  ...otherProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <HeaderTitleStyle {...otherProps}>{children}</HeaderTitleStyle>
}

export default HeaderTitle
