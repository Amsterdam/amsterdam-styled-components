import React from 'react'

const RadioContext = React.createContext({
  selected: '',
  setSelected: () => {},
  name: '',
  error: false,
} as {
  selected: string
  setSelected: Function
  name: string | undefined
  error: boolean | undefined
})
export default RadioContext
