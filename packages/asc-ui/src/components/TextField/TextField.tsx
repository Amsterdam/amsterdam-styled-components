import * as React from 'react'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
import { FormLabelStyle } from '../../styles/components'
import Input, { InputProps } from '../Input/Input'
import { TextFieldStyle } from '../../styles/components/SearchBarStyle/SearchBarStyle'
import IconButton from '../IconButton'

export interface TextFieldProps extends InputProps {
  id: string
  label?: string
  srOnly: boolean
}

const TextField = ({ id, label, srOnly, ...otherProps }: TextFieldProps) => {
  return (
    <TextFieldStyle>
      <FormLabelStyle htmlFor={id} srOnly={srOnly}>
        {label}
      </FormLabelStyle>
      <Input id={id} {...otherProps} />
      <IconButton aria-label="Close">
        <Close />
      </IconButton>
    </TextFieldStyle>
  )
}

TextField.defaultProps = {
  srOnly: false,
}

export default TextField
