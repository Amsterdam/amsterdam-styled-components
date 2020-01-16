import React from 'react'
import BlockquoteStyle, { Props } from './BlockquoteStyle'

export { Props }

const Blockquote: React.FC<Props &
  React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...otherProps
}) => <BlockquoteStyle {...otherProps}>{children}</BlockquoteStyle>

export default Blockquote
