import React from 'react'
import FooterTopStyle, { Props } from './FooterTopStyle'

const FooterTop: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <FooterTopStyle {...otherProps}>{children}</FooterTopStyle>

export default FooterTop
