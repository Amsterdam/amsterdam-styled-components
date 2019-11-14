import React from 'react'

const RadioContext = React.createContext({
  selected: '',
  setSelected: () => {},
  nameGroup: '',
  hasGroup: false,
} as { selected: string; setSelected: Function; nameGroup: string | undefined; hasGroup: boolean })
export default RadioContext
