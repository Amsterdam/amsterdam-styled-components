import React from 'react'
import FooterStyle, { Props } from './FooterStyle'

const Footer: React.FC<Props> = ({ children }) => (
  <FooterStyle>{children}</FooterStyle>
)

export default Footer
