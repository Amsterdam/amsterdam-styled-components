import { createContext } from 'react'

export interface RadioContextValue {
  checked: string
  setChecked: (value: string) => void
  name: string | undefined
  error: boolean | undefined
}

const defaultValue: RadioContextValue = {
  checked: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChecked: () => {},
  name: undefined,
  error: false,
}

const RadioContext = createContext(defaultValue)

export default RadioContext
