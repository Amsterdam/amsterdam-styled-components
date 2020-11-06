import { createContext } from 'react'

export interface LabelContextValue {
  active: boolean
  setActive: (active: boolean) => void
}

const initialValue: LabelContextValue = {
  active: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActive: () => {},
}

const LabelContext = createContext(initialValue)

export default LabelContext
