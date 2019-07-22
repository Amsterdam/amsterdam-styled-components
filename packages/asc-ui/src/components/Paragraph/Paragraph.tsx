import React from 'react'
import ParagraphStyle, { Props } from './ParagraphStyle'

export { Props }

const Paragraph: React.FC<
  Props & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, hasLongText, strong, ...otherProps }) => (
  <ParagraphStyle {...{ hasLongText, strong }} {...otherProps}>
    {children}
  </ParagraphStyle>
)

export default Paragraph
