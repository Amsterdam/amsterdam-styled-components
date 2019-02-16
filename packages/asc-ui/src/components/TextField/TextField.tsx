import * as React from 'react'
import { FormLabelStyled, InputStyled } from '@amsterdam/asc-core'

interface Props {
  error?: boolean
}

const TextField = ({ error = false }: Props) => {
  const states = { error }
  return (
    <div>
      <FormLabelStyled {...states}>Label!</FormLabelStyled>
      <InputStyled />
    </div>
  )
}

export default TextField
