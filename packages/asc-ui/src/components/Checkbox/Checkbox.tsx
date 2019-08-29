import React from 'react'
import { Checkmark } from '@datapunt/asc-assets'
import CheckboxStyle, {
  CheckboxIconStyle,
  CheckboxWrapper,
  Props as StyleProps,
} from './CheckboxStyle'

type Props = {
  henk?: boolean
} & StyleProps

const Checkbox: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  checked: checkedProp,
  className,
  onChange,
  variant,
  disabled,
  ...otherProps
}) => {
  const [checked, setChecked] = React.useState(!!checkedProp)
  const [focus, setFocus] = React.useState(false)

  return (
    <CheckboxWrapper
      {...{ className, disabled, focus, checked }}
      aria-disabled={disabled}
    >
      <CheckboxIconStyle {...{ disabled, variant, checked }} size={15}>
        {checked && <Checkmark />}
      </CheckboxIconStyle>
      <CheckboxStyle
        {...{ ...otherProps, disabled, checked }}
        onFocus={() => {
          setFocus(true)
          console.log('focus set')
        }}
        onBlur={() => setFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e)
          }
          setChecked(!checked)
        }}
      />
    </CheckboxWrapper>
  )
}

export default Checkbox
