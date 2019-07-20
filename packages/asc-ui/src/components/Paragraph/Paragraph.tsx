import React from 'react'
import ParagraphStyle, { Props } from './ParagraphStyle'

export { Props }

const Paragraph: React.FC<
  Props & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className }) => (
  <ParagraphStyle className={className}>{children}</ParagraphStyle>
)

export default Paragraph
