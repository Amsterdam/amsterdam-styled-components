import {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useRef,
  //   useState,
} from 'react'
import SwitchStyle, {
  Props,
  LabelStyle,
  KnobStyle,
  WrapperStyle,
} from './SwitchStyle'

const Switch = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, className, ...otherProps }, externalRef) => {
  //   const [checked, setChecked] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  // Make the component aware of changes in the checked prop
  // useMemo(() => {
  //   setChecked(!!checkedProp)
  // }, [checkedProp, setChecked])

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
