import * as React from 'react'
import { Radio as RadioStyled, RadioLabel, RadioItem } from '@amsterdam/asc-core'
console.log(RadioItem);
const Radio = (props: any) => (
  <div>
    <RadioItem>
      <RadioStyled {...props} />
      <RadioLabel {...props}>{props.label || props.value}</RadioLabel>
    </RadioItem>
  </div>
)

export default Radio
