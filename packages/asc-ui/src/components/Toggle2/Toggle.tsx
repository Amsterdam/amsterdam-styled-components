import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react'
import RadioStyle, { Props, LabelStyle, WrapperStyle } from './ToggleStyle'

const Toggle = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(
  (
    { id, left, right, defaultValue, className, ...otherProps },
    externalRef,
  ) => {
    const ref = useRef<HTMLInputElement>(null)

    useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

    return (
      <WrapperStyle className={className}>
        <RadioStyle
          role="switch"
          name={id}
          id={`${id}-${left}`}
          value={left}
          defaultChecked={defaultValue === left}
          {...{ ...otherProps }}
        />
        <LabelStyle htmlFor={`${id}-${left}`}>{left}</LabelStyle>

        <RadioStyle
          role="switch"
          name={id}
          id={`${id}-${right}`}
          value={right}
          defaultChecked={defaultValue === right}
          {...{ ...otherProps }}
        />
        <LabelStyle htmlFor={`${id}-${right}`}>{right} </LabelStyle>
      </WrapperStyle>
    )
  },
)

export default Toggle
