import type { ElementType, HTMLAttributes } from 'react'
import ParagraphStyle from './ParagraphStyle'

export type Props = {
  as?: ElementType
  strong?: boolean
} & HTMLAttributes<HTMLParagraphElement>

function Paragraph({ children, as = 'p', ...otherProps }: Props) {
  return (
    <ParagraphStyle as={as} {...otherProps}>
      {children}
    </ParagraphStyle>
  )
}

export default Paragraph
