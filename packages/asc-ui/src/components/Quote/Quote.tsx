import { FunctionComponent, HTMLAttributes } from 'react'
import QuoteStyle from './QuoteStyle'

// export { Props }

const Quote: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => <QuoteStyle>{children}</QuoteStyle>

export default Quote
