import * as React from 'react'
import { RadioItemStyled, RadioLabelStyled } from '@datapunt/asc-core'

interface Props {
  id: string
  name: string
  label: string
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
}

const Radio = ({ id, name, value, label, defaultChecked, disabled }: Props) => (
  <RadioItemStyled>
    <RadioLabelStyled
      htmlFor={id}
      disabled={disabled}
    >
      {label || value}
    </RadioLabelStyled>
  </RadioItemStyled>
)

export default Radio
