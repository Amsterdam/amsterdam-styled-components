import * as React from 'react'
import { useUID } from 'react-uid'
import { ReactComponent as Close } from '@datapunt/asc-assets/lib/Icons/Close.svg'
import FormLabelStyle from '../FormLabelStyle'
import IconButton from '../IconButton'
import TextFieldStyle from './TextFieldStyle'
import Input, { InputProps } from '../Input'

export interface TextFieldProps extends InputProps {
  label?: string
  keepFocus?: boolean
  srOnly: boolean
  onClear?: Function
}

const TextField = ({
  label,
  srOnly,
  onClear,
  value,
  keepFocus,
  blurOnEscape,
  focusOnRender,
  ...otherProps
}: TextFieldProps) => {
  const uid = useUID()
  return (
    <TextFieldStyle>
      <FormLabelStyle htmlFor={uid} srOnly={srOnly}>
        {label}
      </FormLabelStyle>
      <Input
        {...{ keepFocus, value, blurOnEscape, focusOnRender }}
        {...otherProps}
        id={uid}
      />
      {onClear && value && (
        <IconButton aria-label="Close" onClick={() => onClear()}>
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
