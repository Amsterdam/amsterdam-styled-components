import * as React from 'react'
import { FormLabelStyle, InputStyle } from '../../styles/components';

interface Props {
  error?: boolean
}

const TextField = ({ error = false }: Props) => {
  const states = { error }
  return (
    <div>
      <FormLabelStyle {...states}>Label!</FormLabelStyle>
      <InputStyle />
    </div>
  )
}

export default TextField
