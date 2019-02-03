import * as React from 'react'
import { Radio as RadioStyled, RadioLabel, RadioItem } from '@amsterdam/asc-core'

export interface Props {
  id: string;
  name: string;
  label: string;
  value?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const Radio = ({id, name , value, label, defaultChecked, disabled}: Props ) => (
  <RadioItem>
    <RadioStyled id={id} name={name} value={value} defaultChecked={defaultChecked} disabled={disabled} />
    <RadioLabel htmlFor={id} disabled={disabled}>
      {label || value}
    </RadioLabel>
  </RadioItem>
)

export default Radio
