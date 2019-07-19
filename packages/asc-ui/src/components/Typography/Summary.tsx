import React from 'react'
import SummaryStyle from './SummaryStyle'
import { Props as ParagraphProps } from './Paragraph'

const Summary: React.FC<ParagraphProps> = ({ children, ...otherProps }) => (
  <SummaryStyle {...otherProps}>{children}</SummaryStyle>
)

export default Summary
