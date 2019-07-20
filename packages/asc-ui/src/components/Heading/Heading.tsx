import React from 'react'
import { styledComponents } from '@datapunt/asc-core'
import HeadingStyle from './HeadingStyle'

const Heading: React.FC<
  styledComponents.StyledProps<any> & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, className, as, ...otherProps }) => (
  <HeadingStyle className={className} as={as} {...otherProps}>
    {children}
  </HeadingStyle>
)

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
