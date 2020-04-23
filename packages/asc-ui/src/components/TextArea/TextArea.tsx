import React from 'react'
import TextAreaStyle from './TextAreaStyle'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ value, error, ...otherProps }, ref) => {
    return (
      <TextAreaStyle ref={ref} error={error} value={value} {...otherProps} />
    )
  },
)

export default TextArea
