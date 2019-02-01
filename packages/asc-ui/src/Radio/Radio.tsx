import * as React from 'react'
import { Radio as RadioStyled, RadioLabel } from '@amsterdam/asc-core'

const Radio = (props: any) => (
  <div style={{position: 'relative'}}>
    <RadioStyled {...props} />
    <RadioLabel {...props}>{props.value}</RadioLabel>
  </div>
)

export default Radio
