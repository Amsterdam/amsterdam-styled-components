import React from 'react'
import BlockquoteStyle, { Props } from './BlockquoteStyle'

export { Props }

const Blockquote: React.FC<
  Props & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, as, ...otherProps }) => (
  <BlockquoteStyle forwardedAs={as} {...otherProps}>
    {children}
  </BlockquoteStyle>
)

export default Blockquote
