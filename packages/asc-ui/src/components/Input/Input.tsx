import React from 'react'
import InputStyle from '../../styles/components/InputStyle'

type InputProps = {
  placeholder?: string
  onChange: any
  onKeyDown: any
  inputRef?: any
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  inputRef,
  ...otherProps
}) => {
  return (
    <InputStyle
      placeholder={placeholder}
      onChange={onChange}
      ref={inputRef}
      {...otherProps}
    />
  )
}

export default Input
