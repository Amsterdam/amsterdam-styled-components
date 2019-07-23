import React from 'react'
import FooterContentStyle, {
  Props as FooterContentStyleProps,
} from './FooterContentStyle'

export interface Props extends FooterContentStyleProps {}

const FooterContent: React.FC<Props> = ({ children, ...otherProps }) => (
  <FooterContentStyle {...otherProps}>{children}</FooterContentStyle>
)

export default FooterContent
