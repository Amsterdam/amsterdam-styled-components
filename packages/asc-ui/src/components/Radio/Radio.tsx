import * as React from 'react'
import { AscCore } from '../../styles'

const { RadioInput, RadioGroup, RadioItem, RadioLabel } = AscCore.Radio

const Radio: React.FC<AscCore.Radio.Props> = ({
  id,
  name,
  value,
  label,
  disabled,
}) => (
  <RadioItem>
    <RadioInput id={id} name={name} disabled={disabled} />
    <RadioLabel htmlFor={id} disabled={disabled}>
      {label || value}
    </RadioLabel>
  </RadioItem>
)

export default Radio

export { RadioGroup }
