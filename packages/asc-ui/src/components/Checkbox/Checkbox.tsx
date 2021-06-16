import { Checkmark, Indeterminate } from '@amsterdam/asc-assets'
import {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import LabelContext from '../Label/LabelContext'
import CheckboxStyle, {
  CheckboxIconStyle,
  CheckboxWrapperStyle,
  Props,
} from './CheckboxStyle'

const Checkbox = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(
  (
    {
      checked: checkedProp,
      className,
      onChange,
      disabled,
      error,
      indeterminate,
      ...otherProps
    },
    externalRef,
  ) => {
    const [checked, setChecked] = useState(!!checkedProp)
    const { setActive } = useContext(LabelContext)
    const ref = useRef<HTMLInputElement>(null)

    useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

    useEffect(() => {
      if (ref.current) {
        ref.current.indeterminate = indeterminate ?? false
      }
    }, [ref, indeterminate])

    // Make the label aware of changes in the checked state
    useEffect(() => {
      setActive(checked)
    }, [checked, setActive])

    // Make the component aware of changes in the checked prop
    useMemo(() => {
      setChecked(!!checkedProp)
    }, [checkedProp, setChecked])

    return (
      <CheckboxWrapperStyle
        {...{ className, disabled, checked, error }}
        aria-disabled={disabled}
      >
        <CheckboxIconStyle
          {...{ disabled, checked, error, indeterminate }}
          data-testid="checkboxIcon"
          size={15}
        >
          {!checked && indeterminate && <Indeterminate />}
          {checked && <Checkmark />}
        </CheckboxIconStyle>
        <CheckboxStyle
          {...{ ...otherProps, disabled, checked, ref }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(e)
            }
            if (typeof checkedProp === 'undefined') {
              setChecked(!checked)
            }
          }}
        />
      </CheckboxWrapperStyle>
    )
  },
)

export default Checkbox
