import * as React from 'react'
import { useUID } from 'react-uid'
import { Close } from '@datapunt/asc-assets'
import FormLabelStyle from '../FormLabelStyle'
import TextFieldStyle from './TextFieldStyle'
import Input, { InputProps } from '../Input'
import Button from '../Button'
import Icon from '../Icon'

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
        <Button
          size={30}
          variant="blank"
          type="button"
          aria-label="Close"
          onClick={() => onClear()}
        >
          <Icon>
            <Close />
          </Icon>
        </Button>
      )}
    </TextFieldStyle>
  )
}

TextField.defaultProps = {
  srOnly: false,
  canClear: true,
}

export default TextField
