import React from 'react'
import InputStyle from './InputStyle'
import useFocusOnRender from '../../utils/useFocusOnRender'

export interface InputProps {
  id: string
  placeholder?: string
  onBlur: any
  focusOnRender?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: any
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputRef?: any
  value: string
}

const Input: React.FC<InputProps> = ({
  focusOnRender,
  ...props
}: InputProps) => {
  const ref: any = React.useRef(null)
  if (focusOnRender) {
    useFocusOnRender(ref)
  }
  return <InputStyle {...props} ref={ref} />
}

export default Input
