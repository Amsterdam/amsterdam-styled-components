import React from 'react'

const RadioContext = React.createContext({
  selected: '',
  setSelected: () => {},
  disabledGroup: false,
  nameGroup: '',
  hasGroup: false,
} as { selected: string; setSelected: Function; disabledGroup: boolean; nameGroup: string | undefined; hasGroup: boolean })
export default RadioContext
