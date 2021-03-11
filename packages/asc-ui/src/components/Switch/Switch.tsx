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
} from 'react'
// import LabelContext from '../Label/LabelContext'
import SwitchStyle, { Props } from './SwitchStyle'

const Switch = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(
  (
    {
      id,
      //   checked: checkedProp,
      //   className,
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

    // useEffect(() => {
    //   if (ref.current) {
    //     ref.current.indeterminate = indeterminate ?? false
    //   }
    // }, [ref, indeterminate])

    // // Make the label aware of changes in the checked state
    // useEffect(() => {
    //   setActive(checked)
    // }, [checked, setActive])

    // Make the component aware of changes in the checked prop
    // useMemo(() => {
    //   setChecked(!!checkedProp)
    // }, [checkedProp, setChecked])

    return (
      <>
        <SwitchStyle {...{ ...otherProps, id, ref }} />
      </>
    )
  },
)

export default Switch
