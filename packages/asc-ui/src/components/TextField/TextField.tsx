import { Close } from '@datapunt/asc-assets'
import React, { useRef } from 'react'
import { useUID } from 'react-uid'
import { useFocus } from '../../utils/hooks'
import Button from '../Button'
import FormLabelStyle from '../FormLabelStyle'
import Icon from '../Icon'
import Input, { InputProps } from '../Input'
import TextFieldStyle from './TextFieldStyle'

export interface TextFieldProps extends InputProps {
  label?: string
  keepFocus?: boolean
  srOnly?: boolean
  errorMessage?: string
  labelStyle?: object
  errorStyle?: object
  onClear?: () => void
  autoFocus?: boolean
}

const TextField = ({
  label,
  srOnly,
  onClear,
  value,
  keepFocus,
  blurOnEscape,
  errorMessage,
  labelStyle,
  errorStyle,
  id: idProp,
  autoFocus,
  ...otherProps
}: TextFieldProps) => {
  const uid = useUID()
  const id = idProp || uid
  const inputRef = useRef<HTMLInputElement>(null)

  useFocus(inputRef, !!autoFocus)

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
        {...{ keepFocus, value, blurOnEscape }}
        {...otherProps}
        id={id}
        error={errorMessage}
        ref={inputRef}
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
