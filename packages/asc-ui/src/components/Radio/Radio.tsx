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
  error,
  id,
  defaultChecked,
  ...otherProps
}) => {
  const [focus, setFocus] = useState(false)
  const {
    setSelected,
    selected: selectedProp,
    nameGroup,
    hasGroup,
  } = useContext(RadioContext)

  // Set selected on defaultChecked
  if (hasGroup && defaultChecked && !selectedProp) {
    setSelected(id)
  }

  return (
    <RadioWrapperStyle
      {...{
        focus,
        error,
        className,
        variant,
        hasGroup,
        disabled,
      }}
      aria-disabled={disabled}
      selected={selectedProp === id}
    >
      <RadioCircleStyle
        {...{
          hasGroup,
          disabled,
        }}
        selected={selectedProp === id}
      />
      <RadioStyle
        {...{
          ...otherProps,
          disabled,
          id,
          defaultChecked,
          hasGroup,
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
