import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react'
import RadioStyle, { Props, LabelStyle, WrapperStyle } from './ToggleStyle'

const Toggle = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, left, right, className, ...otherProps }, externalRef) => {
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  return (
    <WrapperStyle className={className}>
      <RadioStyle
        role="switch"
        name={id}
        id={left}
        value={left}
        {...{ ...otherProps }}
      />
      <LabelStyle htmlFor={left}>{left}</LabelStyle>

      <RadioStyle
        role="switch"
        name={id}
        id={right}
        value={right}
        {...{ ...otherProps }}
      />
      <LabelStyle htmlFor={right}>{right} </LabelStyle>
    </WrapperStyle>
  )
})

export default Toggle
