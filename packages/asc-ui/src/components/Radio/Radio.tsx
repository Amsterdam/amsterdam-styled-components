import React, { useState, useContext } from 'react'
import RadioStyle, {
  RadioWrapperStyle,
  RadioCircleStyle,
  Props,
} from './RadioStyle'
import RadioContext from './RadioContext'

const Radio: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  onChange,
  variant,
  disabled,
  name: nameProp,
  id,
  defaultChecked,
  error: errorProp,
  ...otherProps
}) => {
  const [focus, setFocus] = useState(false)
  const {
    setSelected,
    selected: selectedProp,
    name: nameGroup,
    error: errorGroup,
  } = useContext(RadioContext)

  // Set selected on defaultChecked
  if (defaultChecked && !selectedProp) {
    setSelected(id)
  }

  const error = errorProp || errorGroup || false

  return (
    <RadioWrapperStyle
      {...{
        focus,
        error,
        className,
        variant,
        disabled,
      }}
      aria-disabled={disabled}
      selected={selectedProp === id}
    >
      <RadioCircleStyle
        {...{
          error,
          disabled,
          focus,
        }}
        selected={selectedProp === id}
      />
      <RadioStyle
        {...{
          ...otherProps,
          disabled,
          id,
          defaultChecked,
        }}
        name={nameProp || nameGroup}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => setFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e)
          }
          setSelected(e.target.id)
        }}
      />
    </RadioWrapperStyle>
  )
}

export default Radio
