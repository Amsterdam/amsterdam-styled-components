import React from 'react'
import InputStyle from '../../styles/components/InputStyle'

export interface InputProps {
  id: string
  placeholder?: string
  onBlur: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: any
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputRef?: any
  value: string
}

const Input: React.FC<InputProps> = ({ inputRef, ...props }: InputProps) => (
  <InputStyle {...props} ref={inputRef} />
)

export default Input
