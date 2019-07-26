import React from 'react'
import HeadingStyle, { Props as HeadingStyleProps } from './HeadingStyle'

export type Props = HeadingStyleProps & React.HTMLAttributes<HTMLHeadingElement>

const Heading: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeadingStyle {...otherProps}>{children}</HeadingStyle>
)

Heading.defaultProps = {
  $as: 'h1',
}

export default Heading
