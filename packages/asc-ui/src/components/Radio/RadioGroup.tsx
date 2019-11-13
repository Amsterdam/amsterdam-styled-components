import React from 'react'

import RadioGroupStyle, { Props } from './RadioGroupStyle'
import RadioContext from './RadioContext'

const RadioGroup: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  name,
  children,
  horizontal,
}) => {
  const [selected, setSelected] = React.useState('')
  return (
    <RadioContext.Provider
      value={{
        selected,
        setSelected,
        disabledGroup: !!disabled,
        nameGroup: name,
        hasGroup: true,
      }}
    >
      <RadioGroupStyle horizontal={horizontal}>{children}</RadioGroupStyle>
    </RadioContext.Provider>
  )
}

export default RadioGroup
