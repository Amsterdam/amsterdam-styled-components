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

const Radio = ({
  id, name, value, label, defaultChecked, disabled,
}: Props) => (
  <AscCore.RadioItem>
    <AscCore.RadioLabel
      htmlFor={id}
      disabled={disabled}
    >
      {label || value}
    </AscCore.RadioLabel>
  </AscCore.RadioItem>
)

export default Radio
