import * as React from 'react'
import { AscCore } from '@datapunt/asc-core'

interface Props {
  error?: boolean
}

const TextField = ({ error = false }: Props) => {
  const states = { error }
  return (
    <div>
      <AscCore.FormLabel {...states}>Label!</AscCore.FormLabel>
      <AscCore.Input />
    </div>
  )
}

export default TextField
