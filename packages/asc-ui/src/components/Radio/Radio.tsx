import React, { useState, useContext, useMemo } from 'react'
import RadioStyle, {
  RadioWrapperStyle,
  RadioCircleStyle,
  Props,
} from './RadioStyle'
import RadioContext from './RadioContext'
import LabelContext from '../Label/LabelContext'

const Radio: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  onChange,
  variant,
  disabled,
  id,
  defaultChecked,
  error: errorProp,
  value,
  ...otherProps
}) => {
  const [focus, setFocus] = useState(false)
  const {
    setChecked,
    checked: checkedProp,
    name,
    error: errorGroup,
  } = useContext(RadioContext)
  const { setActive } = useContext(LabelContext)
  const checked = checkedProp === id
  const error = errorProp || errorGroup || false

  // Make the label aware of changes in the checked state
  useMemo(() => {
    setActive(checked)
  }, [checked, setActive])

  // Set checked value on `defaultChecked` if `name` or `id` changes (to fix re-rendering)
  React.useEffect(() => {
    // Need a timeout because the RadioGroup also has a `useEffect`
    setTimeout(() => {
      if (defaultChecked) {
        setChecked(id)
      }
    }, 0)
  }, [name, id])

  return (
    <RadioWrapperStyle
      {...{
        focus,
        error,
        className,
        variant,
        disabled,
        checked,
      }}
      aria-disabled={disabled}
    >
      <RadioCircleStyle
        {...{
          error,
          disabled,
          focus,
          variant,
          checked,
        }}
      />
      <RadioStyle
        {...{
          ...otherProps,
          disabled,
          id,
          name,
          value,
          checked,
        }}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => setFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e)
          }
          setChecked(e.target.id)
        }}
      />
    </RadioWrapperStyle>
  )
}

export default Radio
