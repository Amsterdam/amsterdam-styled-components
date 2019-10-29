import React from 'react'

const RadioContext = React.createContext({
  selected: '',
  setSelected: () => {},
  disabledGroup: false,
} as { selected: string; setSelected: Function; disabledGroup: boolean })
export default RadioContext
