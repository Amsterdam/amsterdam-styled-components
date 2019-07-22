import React from 'react'
import HeadingStyle from './HeadingStyle'

const Heading: React.FC<
  {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, className, as, ...otherProps }) => (
  <HeadingStyle className={className} as={as} {...otherProps}>
    {children}
  </HeadingStyle>
)

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
