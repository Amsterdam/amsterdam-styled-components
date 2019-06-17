import * as React from 'react'
import { Close } from '@datapunt/asc-assets'
import FormLabelStyle from '../FormLabelStyle'
import IconButton from '../IconButton'
import TextFieldStyle from './TextFieldStyle'
import Input, { InputProps } from '../Input/Input'

export interface TextFieldProps extends InputProps {
  id: string
  label?: string
  srOnly: boolean
  canClear: boolean
  onClear: any
  inputRef?: any
}

const TextField = ({
  id,
  label,
  srOnly,
  canClear,
  onClear,
  value,
  inputRef,
  ...otherProps
}: TextFieldProps) => {
  return (
    <TextFieldStyle>
      <FormLabelStyle htmlFor={id} srOnly={srOnly}>
        {label}
      </FormLabelStyle>
      <Input id={id} value={value} {...otherProps} inputRef={inputRef} />
      {canClear && value && (
        <IconButton aria-label="Close" onClick={onClear}>
          <Close />
        </IconButton>
      )}
    </TextFieldStyle>
  )
}

TextField.defaultProps = {
  srOnly: false,
  canClear: true,
}

export default TextField
