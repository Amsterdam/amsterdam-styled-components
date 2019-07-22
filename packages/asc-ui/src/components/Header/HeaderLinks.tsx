import React from 'react'
import HeaderLinksStyle from './HeaderLinksStyle'

const HeaderLinks: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...otherProps
}) => <HeaderLinksStyle {...otherProps}>{children}</HeaderLinksStyle>

export default HeaderLinks
