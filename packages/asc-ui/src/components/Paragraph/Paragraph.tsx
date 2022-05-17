import type { HTMLAttributes } from 'react'
import ParagraphStyle, { Props } from './ParagraphStyle'

export { Props }

function Paragraph({
  children,
  as = 'p',
  ...otherProps
}: Props & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <ParagraphStyle forwardedAs={as} {...otherProps}>
      {children}
    </ParagraphStyle>
  )
}

export default Paragraph
