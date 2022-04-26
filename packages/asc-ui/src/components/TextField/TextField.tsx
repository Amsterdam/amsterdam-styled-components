import { Close } from '@amsterdam/asc-assets'
import type { CSSProperties } from 'react'
import { useRef } from 'react'
import { useUID } from 'react-uid'
import { useFocus } from '../../utils/hooks'
import FormLabelStyle from '../FormLabelStyle'
import Icon from '../Icon'
import type { InputProps } from '../Input'
import Input from '../Input'
import TextFieldStyle, { CloseButton, InputWrapper } from './TextFieldStyle'

export interface TextFieldProps extends InputProps {
  label?: string
  keepFocus?: boolean
  srOnly?: boolean
  error?: boolean
  labelStyle?: CSSProperties
  onClear?: () => void
  autoFocus?: boolean
}

function TextField({
  label,
  srOnly,
  onClear,
  value,
  keepFocus,
  blurOnEscape,
  error,
  labelStyle,
  id: idProp,
  autoFocus,
  ...otherProps
}: TextFieldProps) {
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
      <InputWrapper>
        <Input
          {...{ keepFocus, value, blurOnEscape, error }}
          {...otherProps}
          id={id}
          ref={inputRef}
        />
        {onClear && value && (
          <CloseButton
            size={30}
            variant="blank"
            type="button"
            aria-label="Close"
            onClick={() => onClear()}
          >
            <Icon>
              <Close />
            </Icon>
          </CloseButton>
        )}
      </InputWrapper>
    </TextFieldStyle>
  )
}

export default TextField
