// import { Checkmark, Indeterminate } from '@amsterdam/asc-assets'
import {
  //   ChangeEvent,
  forwardRef,
  HTMLAttributes,
  //   useContext,
  //   useEffect,
  useImperativeHandle,
  //   useMemo,
  useRef,
  //   useState,
  //   className,
} from 'react'
// import LabelContext from '../Label/LabelContext'
import SwitchStyle, { Props, LabelStyle, KnobStyle } from './SwitchStyle'

const Switch = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(
  (
    {
      id,
      //   checked: checkedProp,
      className,
      //   onChange,
      //   disabled,
      //   error,
      //   indeterminate,
      ...otherProps
    },
    externalRef,
  ) => {
    // const [checked, setChecked] = useState(!!checkedProp)
    // const { setActive } = useContext(LabelContext)
    const ref = useRef<HTMLInputElement>(null)

    useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

    // Make the component aware of changes in the checked prop
    // useMemo(() => {
    //   setChecked(!!checkedProp)
    // }, [checkedProp, setChecked])

    return (
      <span className={className}>
        <LabelStyle htmlFor={id}>
          <KnobStyle />
          <SwitchStyle role="switch" {...{ ...otherProps, id, ref }} />
        </LabelStyle>
      </span>
    )
  },
)

export default Switch
