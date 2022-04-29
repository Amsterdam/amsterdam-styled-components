import { Quote as QuoteIcon } from '@amsterdam/asc-assets'
import type { HTMLAttributes } from 'react'
import QuoteStyle, { Icon } from './QuoteStyle'

function Quote({ children }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <QuoteStyle>
      <Icon size={40}>
        <QuoteIcon />
      </Icon>
      {children}
    </QuoteStyle>
  )
}

export default Quote
