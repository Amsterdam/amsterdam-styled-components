import type { HTMLAttributes } from 'react'
import ErrorMessageStyle from './ErrorMessageStyle'

export interface ErrorMessageProps {
  message: string
}

function ErrorMessage({
  message,
  ...otherProps
}: ErrorMessageProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <ErrorMessageStyle role="alert" {...otherProps}>
      {message}
    </ErrorMessageStyle>
  )
}

export default ErrorMessage
