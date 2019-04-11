import * as React from 'react'
import { AscCore } from '../../styles'

interface Props {
  id: string
  name?: string
  label: string
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
}
const { RadioGroup, RadioItem, RadioLabel } = AscCore.Radio

const Radio = ({ id, value, label, disabled }: Props) => (
  <RadioItem>
    <RadioLabel htmlFor={id} disabled={disabled}>
      {label || value}
    </RadioLabel>
  </RadioItem>
)

export default Radio

export { RadioGroup }
