import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react'
import RadioStyle, { Props, LabelStyle } from './ToggleStyle'

const Toggle = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, left, right, className, ...otherProps }, externalRef) => {
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  return (
    <div className={className}>
      <LabelStyle htmlFor={left}>
        <RadioStyle role="switch" name={id} id={left} {...{ ...otherProps }} />
        {left}
      </LabelStyle>
      <LabelStyle htmlFor={right}>
        {right}
        <RadioStyle role="switch" name={id} id={right} {...{ ...otherProps }} />
      </LabelStyle>
    </div>
  )
})

export default Toggle
