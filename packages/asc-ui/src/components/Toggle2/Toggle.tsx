import React, {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react'
import SwitchStyle, {
  Props,
  LabelStyle,
  KnobStyle,
  WrapperStyle,
} from './ToggleStyle'

const Switch = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, className, ...otherProps }, externalRef) => {
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  return (
    <WrapperStyle className={className}>
      <LabelStyle htmlFor={id}>
        <SwitchStyle role="switch" {...{ ...otherProps, id, ref }} />
        <KnobStyle />
      </LabelStyle>
    </WrapperStyle>
  )
})

export default Switch
