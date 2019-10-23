import React from 'react'

const LabelContext = React.createContext({
  active: false,
  setActive: () => {},
} as { active: boolean; setActive: Function })
export default LabelContext
