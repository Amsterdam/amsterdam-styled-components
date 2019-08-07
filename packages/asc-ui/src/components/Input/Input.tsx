import React from 'react'
import InputStyle from './InputStyle'
import InputContext from './InputMethodsContext'
import useFocusOnRender from '../../utils/hooks/useFocusOnRender'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'

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
  const { onKeyDown } = props

  useFocusOnRender(ref, focusOnRender)

  const { onKeyDown: onKeyDownHook } = useActionOnEscape(() => {
    if (ref.current) {
      ref.current.blur()
    }
  })

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    context: InputMethods,
  ) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
    if (blurOnEscape) {
      onKeyDownHook(e)
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
