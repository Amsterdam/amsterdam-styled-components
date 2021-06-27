import { AnchorHTMLAttributes, FunctionComponent } from 'react'
import HeaderTitleStyle from './HeaderTitleStyle'

const HeaderTitle: FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>> =
  ({ children, ...otherProps }) => {
    return <HeaderTitleStyle {...otherProps}>{children}</HeaderTitleStyle>
  }

export default HeaderTitle
