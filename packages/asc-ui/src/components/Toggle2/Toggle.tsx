import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react'
import ToggleStyle, { Props, LabelStyle } from './ToggleStyle'

const Toggle = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, left, right, className, ...otherProps }, externalRef) => {
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  return (
    <div className={className}>
      <LabelStyle htmlFor={left}>
        <ToggleStyle role="switch" {...{ ...otherProps, id }} />
        {left}
      </LabelStyle>
      <LabelStyle htmlFor={right}>
        {right}
        <ToggleStyle role="switch" {...{ ...otherProps, id }} />
      </LabelStyle>
    </div>
  )
})

export default Toggle
