import type { ElementType, HTMLAttributes } from 'react'
import HeadingStyle from './HeadingStyle'

export type Props = {
  as?: ElementType
} & HTMLAttributes<HTMLHeadingElement>

function Heading({ children, as = 'h1', ...otherProps }: Props) {
  return (
    <HeadingStyle as={as} {...otherProps}>
      {children}
    </HeadingStyle>
  )
}

export default Heading
