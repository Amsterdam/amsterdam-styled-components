import * as React from 'react'
import { FormLabel, Input } from '@amsterdam/asc-core'

interface IProps {
  error?: boolean
}

const TextField = ({ error = false }: IProps) => {
  const states = { error }
  return (
    <div>
      <FormLabel {...states}>Labeltje!</FormLabel>
      <Input />
    </div>
  )
}

export default TextField
