import type { FunctionComponent, HTMLAttributes } from 'react'
import ErrorMessageStyle from './ErrorMessageStyle'

export interface ErrorMessageProps {
  message: string
}

const ErrorMessage: FunctionComponent<
  ErrorMessageProps & HTMLAttributes<HTMLDivElement>
> = ({ message, ...otherProps }) => {
  return (
    <ErrorMessageStyle role="alert" {...otherProps}>
      {message}
    </ErrorMessageStyle>
  )
}

export default ErrorMessage
