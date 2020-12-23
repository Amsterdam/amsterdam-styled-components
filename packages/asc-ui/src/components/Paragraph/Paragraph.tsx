import React, { FunctionComponent } from 'react'
import ParagraphStyle, { Props } from './ParagraphStyle'

export { Props }

const Paragraph: FunctionComponent<
  Props & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, as, ...otherProps }) => (
  <ParagraphStyle forwardedAs={as} {...otherProps}>
    {children}
  </ParagraphStyle>
)

export default Paragraph
