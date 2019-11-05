import React from 'react'

const RadioContext = React.createContext({
  selected: '',
  setSelected: () => {},
  disabledGroup: false,
  nameGroup: '',
} as { selected: string; setSelected: Function; disabledGroup: boolean; nameGroup: string | undefined })
export default RadioContext
