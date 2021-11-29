import type { FunctionComponent, HTMLAttributes } from 'react'
import type { Props as HeadingStyleProps } from './HeadingStyle'
import HeadingStyle from './HeadingStyle'

export type Props = HeadingStyleProps & HTMLAttributes<HTMLHeadingElement>

const Heading: FunctionComponent<Props> = ({ children, as, ...otherProps }) => (
  <HeadingStyle forwardedAs={as} {...otherProps}>
    {children}
  </HeadingStyle>
)

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
