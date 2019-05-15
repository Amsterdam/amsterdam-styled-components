import React from 'react'
import InputStyle from '../../styles/components/InputStyle'

type InputProps = {
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  value: string
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  onKeyDown,
  ...otherProps
}) => (
  <InputStyle
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
    {...otherProps}
  />
)

export default Input
