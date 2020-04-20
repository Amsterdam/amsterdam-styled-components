import React, { useState, useContext, useEffect } from 'react'
import RadioStyle, {
  RadioWrapperStyle,
  RadioCircleStyle,
  Props,
} from './RadioStyle'
import RadioContext from './RadioContext'
import LabelContext from '../Label/LabelContext'

const Radio = React.forwardRef<
  HTMLInputElement,
  Props & React.HTMLAttributes<HTMLInputElement>
>(
  (
    {
      className,
      onChange,
      variant,
      disabled,
      id,
      checked: defaultChecked,
      error: errorProp,
      value,
      ...otherProps
    },
    ref,
  ) => {
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
    useEffect(() => {
      setActive(checked)
    }, [checked, setActive])

    // Pass default `checked` to RadioGroup on load and when `id` changes
    useEffect(() => {
      if (defaultChecked) setChecked(id)
    }, [id, defaultChecked, setChecked])

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
            ref,
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
  },
)

export default Radio
