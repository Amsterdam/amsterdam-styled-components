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
  srOnly?: boolean
  errorMessage?: string
  labelStyle?: object
  errorStyle?: object
  onClear?: () => void
}

const TextField = ({
  label,
  srOnly,
  onClear,
  value,
  keepFocus,
  blurOnEscape,
  focusOnRender,
  errorMessage,
  labelStyle,
  errorStyle,
  id: idProp,
  ...otherProps
}: TextFieldProps) => {
  const uid = useUID()
  const id = idProp || uid
  return (
    <TextFieldStyle>
      <FormLabelStyle
        htmlFor={id}
        srOnly={srOnly ?? false}
        label={label}
        style={labelStyle}
      >
        {label}
      </FormLabelStyle>
      {errorMessage && (
        <FormLabelStyle
          htmlFor={id}
          srOnly={srOnly ?? false}
          error={errorMessage}
          style={errorStyle}
        >
          {errorMessage}
        </FormLabelStyle>
      )}
      <Input
        {...{ keepFocus, value, blurOnEscape, focusOnRender }}
        {...otherProps}
        id={id}
        error={errorMessage}
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

export default TextField
