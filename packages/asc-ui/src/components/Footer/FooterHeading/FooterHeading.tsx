import React from 'react'
import FooterHeadingStyle, { Props } from './FooterHeadingStyle'

export { Props }

const FooterHeading: React.FC<
  Props & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...otherProps }) => {
  return <FooterHeadingStyle {...otherProps}>{children}</FooterHeadingStyle>
}

FooterHeading.defaultProps = {
  $as: 'h3',
}

export default FooterHeading
