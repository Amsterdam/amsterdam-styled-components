import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import TextAreaStyle from './TextAreaStyle'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ value, error, ...otherProps }, ref) => {
    return (
      <TextAreaStyle ref={ref} error={error} value={value} {...otherProps} />
    )
  },
)

export default TextArea
