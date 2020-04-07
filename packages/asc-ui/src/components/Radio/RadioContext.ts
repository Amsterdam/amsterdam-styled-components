import React from 'react'

const RadioContext = React.createContext({
  checked: '',
  setChecked: () => {},
  name: undefined,
  error: false,
} as
  {
    checked: string
    setChecked: Function
    name: string | undefined
    error: boolean | undefined
  })
export default RadioContext
