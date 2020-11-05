import React, { FunctionComponent } from 'react'
import BlockquoteStyle, { Props } from './BlockquoteStyle'

export { Props }

const Blockquote: FunctionComponent<
  Props & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, as, ...otherProps }) => (
  <BlockquoteStyle forwardedAs={as} {...otherProps}>
    {children}
  </BlockquoteStyle>
)

export default Blockquote
