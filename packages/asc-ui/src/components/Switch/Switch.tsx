import type { HTMLAttributes } from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import SwitchStyle, { Checkbox, Track, Knob } from './SwitchStyle'

const Switch = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ className, ...otherProps }, externalRef) => {
    const ref = useRef<HTMLInputElement>(null)

    useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

    return (
      <SwitchStyle className={className}>
        <Checkbox role="switch" {...{ ...otherProps, ref }} />
        <Track />
        <Knob />
      </SwitchStyle>
    )
  },
)

export default Switch
