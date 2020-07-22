import React, {
  useState,
  useContext,
  useMemo,
  useImperativeHandle,
  useEffect,
} from 'react'
import { Checkmark, Indeterminate } from '@datapunt/asc-assets'
import CheckboxStyle, {
  CheckboxIconStyle,
  CheckboxWrapperStyle,
  Props,
} from './CheckboxStyle'
import LabelContext from '../Label/LabelContext'

const Checkbox = React.forwardRef<
  HTMLInputElement,
  Props & React.HTMLAttributes<HTMLInputElement>
>(
  (
    {
      checked: checkedProp,
      className,
      onChange,
      variant,
      disabled,
      error,
      indeterminate,
      ...otherProps
    },
    externalRef,
  ) => {
    const [checked, setChecked] = useState(!!checkedProp)
    const [focus, setFocus] = useState(false)
    const { setActive } = useContext(LabelContext)
    const ref = React.useRef<HTMLInputElement>(null)

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
        {...{ className, disabled, focus, checked, error }}
        aria-disabled={disabled}
      >
        <CheckboxIconStyle
          {...{ disabled, variant, checked, error, indeterminate }}
          size={15}
        >
          {!checked && indeterminate && <Indeterminate />}
          {checked && <Checkmark />}
        </CheckboxIconStyle>
        <CheckboxStyle
          {...{ ...otherProps, disabled, checked, ref }}
          onFocus={() => {
            setFocus(true)
          }}
          onBlur={() => setFocus(false)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
