import { Quote as QuoteIcon } from '@amsterdam/asc-assets'
import type { FunctionComponent, HTMLAttributes } from 'react'
import QuoteStyle, { Icon } from './QuoteStyle'

const Quote: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => (
  <QuoteStyle>
    <Icon size={40}>
      <QuoteIcon />
    </Icon>
    {children}
  </QuoteStyle>
)

export default Quote
