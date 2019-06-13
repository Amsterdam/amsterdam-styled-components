import React from 'react'
import InputStyle from './InputStyle'
import InputContext from './InputMethodsContext'
import useFocusOnRender from '../../utils/useFocusOnRender'
import useActionOnEscape from '../../utils/useActionOnEscape'

export interface InputMethods {
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onWatchValue?: (value: string) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  setInputRef?: (ref: React.RefObject<HTMLInputElement>) => void
}

export interface InputProps extends InputMethods {
  placeholder?: string
  value?: string
  id?: string
  keepFocus?: boolean
  blurOnEscape?: boolean
  focusOnRender?: boolean
}

export interface Shared {}

const Input: React.FC<InputProps> = ({
  blurOnEscape,
  focusOnRender,
  value,
  ...props
}: InputProps) => {
  const ref = React.useRef<HTMLInputElement>(null)
  let { onKeyDown } = props

  if (focusOnRender) {
    useFocusOnRender(ref)
  }
  if (blurOnEscape) {
    ;({ onKeyDown } = useActionOnEscape(() => {
      if (ref.current) {
        ref.current.blur()
      }
    }))
  }

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    context: InputMethods,
  ) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
    if (context.onKeyDown) {
      context.onKeyDown(e)
    }
  }

  return (
    <InputContext.Consumer>
      {(context: InputMethods) => {
        if (context.setInputRef) {
          context.setInputRef(ref)
        }
        return (
          <InputStyle
            ref={ref}
            {...props}
            {...context}
            onKeyDown={e => {
              handleOnKeyDown(e, context)
            }}
            value={value}
          />
        )
      }}
    </InputContext.Consumer>
  )
}

export default Input
