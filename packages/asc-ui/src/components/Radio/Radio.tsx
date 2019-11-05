import React, {
  useState,
  useContext,
  // useMemo
} from 'react'
import RadioStyle, { RadioWrapperStyle, Props } from './RadioStyle'
import RadioContext from './RadioContext'

const Radio: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  onChange,
  variant,
  disabled: disabledProp,
  name: nameProp,
  error,
  id,
  defaultChecked,
  ...otherProps
}) => {
  const [focus, setFocus] = useState(false)
  const { setSelected, selected, disabledGroup, nameGroup } = useContext(
    RadioContext,
  )
  const disabled = disabledProp || disabledGroup
  const name = nameProp || nameGroup

  // Set selected on defaultChecked
  if (defaultChecked && !selected) {
    setSelected(id)
  }

  return (
    <RadioWrapperStyle
      {...{
        disabled,
        focus,
        error,
        className,
        variant,
      }}
      aria-disabled={disabled}
      isSelected={selected === id}
    >
      <RadioStyle
        {...{
          ...otherProps,
          disabled,
          id,
          defaultChecked,
          name,
        }}
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
