import type { HTMLAttributes } from 'react'
import BlockquoteStyle, { Props } from './BlockquoteStyle'

export { Props }

function Blockquote({
  children,
  as,
  ...otherProps
}: Props & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <BlockquoteStyle forwardedAs={as} {...otherProps}>
      {children}
    </BlockquoteStyle>
  )
}

export default Blockquote
