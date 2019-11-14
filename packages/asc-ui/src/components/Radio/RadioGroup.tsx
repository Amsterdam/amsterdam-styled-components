import React from 'react'

import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import RadioGroupStyle, { Props } from './RadioGroupStyle'
import RadioContext from './RadioContext'

const RadioGroup: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  name,
  horizontal,
  children: childrenProps,
}) => {
  const [selected, setSelected] = React.useState('')

  const { children } = usePassPropsToChildren(childrenProps, {
    disabled,
  })
  return (
    <RadioContext.Provider
      value={{
        selected,
        setSelected,
        nameGroup: name,
        hasGroup: true,
      }}
    >
      <RadioGroupStyle horizontal={horizontal}>
        {disabled ? children : childrenProps}
      </RadioGroupStyle>
    </RadioContext.Provider>
  )
}

export default RadioGroup
