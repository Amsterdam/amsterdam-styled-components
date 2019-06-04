import React from 'react'
import InputStyle from './InputStyle'
import InputContext from './InputContext'
import useKeepFocus from '../../utils/useKeepFocus'
import useFocusOnRender from '../../utils/useFocusOnRender'
import useActionOnEscape from '../../utils/useActionOnEscape'

export interface InputMethods {
  onBlur?: any
  onWatchValue?: (value: string) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: any
}

export interface InputProps extends InputMethods {
  placeholder?: string
  value?: string
  id?: string
  keepFocus?: boolean
  blurOnEscape?: boolean
}

export interface Shared {}

const Input: React.FC<InputProps> = ({
  keepFocus,
  blurOnEscape,
  value,
  ...props
}: InputProps) => {
  const ref = React.useRef(null)
  if (keepFocus) {
    if (ref) {
      useKeepFocus(ref, value)
      useFocusOnRender(ref)
    }
  }

  let { onKeyDown } = props

  if (blurOnEscape && ref) {
    // @ts-ignore
    ;({ onKeyDown } = useActionOnEscape(() => {
      // @ts-ignore
      ref.current.blur()
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
