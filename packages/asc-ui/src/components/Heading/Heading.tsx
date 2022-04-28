import type { HTMLAttributes } from 'react'
import type { Props as HeadingStyleProps } from './HeadingStyle'
import HeadingStyle from './HeadingStyle'

export type Props = HeadingStyleProps & HTMLAttributes<HTMLHeadingElement>

function Heading({ children, as, ...otherProps }: Props) {
  return (
    <HeadingStyle forwardedAs={as} {...otherProps}>
      {children}
    </HeadingStyle>
  )
}

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
