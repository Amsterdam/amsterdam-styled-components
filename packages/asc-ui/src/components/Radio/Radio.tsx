import * as React from 'react'
import { AscCore } from '@datapunt/asc-core'

interface Props {
  id: string
  name: string
  label: string
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
}
const { Radio, RadioGroup, RadioItem, RadioLabel } = AscCore.Radio

const RadioStyled = ({ id, name, value, label, disabled }: Props) => (
  <RadioItem>
    <Radio id={id} name={name} disabled={disabled} />
    <RadioLabel htmlFor={id} disabled={disabled}>
      {label || value}
    </RadioLabel>
  </RadioItem>
)

export default RadioStyled

export { RadioGroup }
