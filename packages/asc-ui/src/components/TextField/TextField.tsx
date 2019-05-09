import * as React from 'react'
import { AscCore } from '../../styles'

interface Props {
  error?: boolean
}

const TextField = ({ error = false }: Props) => {
  const states = { error }
  return (
    <div>
      <AscCore.FormLabelStyle {...states}>Label!</AscCore.FormLabelStyle>
      <AscCore.InputStyle />
    </div>
  )
}

export default TextField
