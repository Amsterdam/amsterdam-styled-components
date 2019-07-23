import React from 'react'
import FooterStyle, { Props } from './FooterStyle'

const Footer: React.FC<Props> = ({ children, ...otherProps }) => (
  <FooterStyle {...otherProps}>{children}</FooterStyle>
)

export default Footer
