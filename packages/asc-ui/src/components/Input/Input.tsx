import React from 'react'
import InputStyle from '../../styles/components/InputStyle'

type InputProps = {
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputRef?: any
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  onKeyDown,
  inputRef,
  ...otherProps
}) => {
  return (
    <InputStyle
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      {...otherProps}
    />
  )
}

export default Input
