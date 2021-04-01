import { Quote as QuoteIcon } from '@amsterdam/asc-assets'
import { FunctionComponent, HTMLAttributes } from 'react'
import QuoteStyle from './QuoteStyle'
import Icon from '../Icon'

const Quote: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => (
  <QuoteStyle>
    <Icon>
      <QuoteIcon />
    </Icon>
    {children}
  </QuoteStyle>
)

export default Quote
