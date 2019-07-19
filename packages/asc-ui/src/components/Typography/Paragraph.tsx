import React from 'react'
import ParagraphStyle, { Props } from './ParagraphStyle'

export { Props }

const Paragraph: React.FC<Props> = ({ children }) => (
  <ParagraphStyle>{children}</ParagraphStyle>
)

export default Paragraph
