import React, { useImperativeHandle } from 'react'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'
import useFocusOnRender from '../../utils/hooks/useFocusOnRender'
import InputContext from './InputMethodsContext'
import InputStyle from './InputStyle'

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
  error?: string
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & React.HTMLAttributes<HTMLInputElement>
>(({ blurOnEscape, focusOnRender, value, error, ...props }, externalRef) => {
  const { onKeyDown } = props
  const inputRef = React.useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => inputRef.current as HTMLInputElement)
  useFocusOnRender(inputRef, focusOnRender)

  const { onKeyDown: onKeyDownHook } = useActionOnEscape(() => {
    if (inputRef.current) {
      inputRef.current.blur()
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
          context.setInputRef(inputRef)
        }
        return (
          <InputStyle
            ref={inputRef}
            {...props}
            {...context}
            onKeyDown={(e) => {
              handleOnKeyDown(e, context)
            }}
            error={error}
            value={value}
          />
        )
      }}
    </InputContext.Consumer>
  )
})

export default Input
