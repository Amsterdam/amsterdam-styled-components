import React from 'react'
import FooterBottomStyle, { Props } from './FooterBottomStyle'

const FooterBottom: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <FooterBottomStyle {...otherProps}>{children}</FooterBottomStyle>

export default FooterBottom
