import { Close } from '@amsterdam/asc-assets'
import { CSSProperties, useRef } from 'react'
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
  error?: boolean
  labelStyle?: CSSProperties
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
  error,
  labelStyle,
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
      <Input
        {...{ keepFocus, value, blurOnEscape, error }}
        {...otherProps}
        id={id}
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
