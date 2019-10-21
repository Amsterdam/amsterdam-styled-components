import React, { useState, useContext, useMemo } from 'react'
import { Checkmark } from '@datapunt/asc-assets'
import CheckboxStyle, {
  CheckboxIconStyle,
  CheckboxWrapperStyle,
  Props,
} from './CheckboxStyle'
import LabelContext from '../Label/LabelContext'

const Checkbox: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  checked: checkedProp,
  className,
  onChange,
  variant,
  disabled,
  error,
  ...otherProps
}) => {
  const [checked, setChecked] = useState(!!checkedProp)
  const [focus, setFocus] = useState(false)
  const { setActive } = useContext(LabelContext)

  useMemo(() => {
    setActive(checked)
  }, [checked])

  return (
    <CheckboxWrapperStyle
      {...{ className, disabled, focus, checked, error }}
      aria-disabled={disabled}
    >
      <CheckboxIconStyle {...{ disabled, variant, checked, error }} size={15}>
        {checked && <Checkmark />}
      </CheckboxIconStyle>
      <CheckboxStyle
        {...{ ...otherProps, disabled, checked }}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => setFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e)
          }
          setChecked(!checked)
        }}
      />
    </CheckboxWrapperStyle>
  )
}

export default Checkbox
