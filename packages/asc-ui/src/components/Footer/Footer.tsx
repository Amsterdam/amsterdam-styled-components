import React from 'react'
import FooterStyle, { Props } from './FooterStyle'

const Footer: React.FC<Props> = ({ children, className }) => (
  <FooterStyle className={className}>{children}</FooterStyle>
)

export default Footer
