import React from 'react'
import InputStyle from '../../styles/components/InputStyle'

export interface InputProps {
  id: string
  placeholder?: string
  onBlur: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: any
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  value: string
}

const Input: React.FC<InputProps> = ({ ...props }: InputProps) => (
  <InputStyle {...props} />
)

export default Input
