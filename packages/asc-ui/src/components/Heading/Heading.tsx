import React from 'react'
import HeadingStyle, { Props as HeadingStyleProps } from './HeadingStyle'

type Props = HeadingStyleProps & React.HTMLAttributes<HTMLHeadingElement>

const Heading: React.FC<Props> = ({
  children,
  className,
  as,
  styleAs,
  ...otherProps
}) => (
  <HeadingStyle {...{ styleAs, as, className }} {...otherProps}>
    {children}
  </HeadingStyle>
)

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
