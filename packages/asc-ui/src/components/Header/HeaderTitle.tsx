import React from 'react'
import HeaderTitleStyle from './HeaderTitleStyle'

const HeaderTitle: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...otherProps
}) => {
  return <HeaderTitleStyle {...otherProps}>{children}</HeaderTitleStyle>
}

export default HeaderTitle
