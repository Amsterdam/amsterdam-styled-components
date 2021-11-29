import type { InputHTMLAttributes, KeyboardEvent, RefObject } from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'
import InputContext from './InputMethodsContext'
import InputStyle from './InputStyle'

export interface InputMethods extends InputHTMLAttributes<HTMLInputElement> {
  onWatchValue?: (value: string) => void
  setInputRef?: (ref: RefObject<HTMLInputElement>) => void
}

export interface InputProps extends InputMethods {
  keepFocus?: boolean
  blurOnEscape?: boolean
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ blurOnEscape, value, error, ...props }, externalRef) => {
    const { onKeyDown } = props
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(externalRef, () => inputRef.current as HTMLInputElement)

    const { onKeyDown: onKeyDownHook } = useActionOnEscape(() => {
      if (inputRef.current) {
        inputRef.current.blur()
      }
    })

    const handleOnKeyDown = (
      e: KeyboardEvent<HTMLInputElement>,
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
  },
)

export default Input
