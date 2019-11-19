import React from 'react'

import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import RadioGroupStyle, { Props } from './RadioGroupStyle'
import RadioContext from './RadioContext'

const RadioGroup: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  error,
  name,
  horizontal,
  children: childrenProps,
}) => {
  const [checked, setChecked] = React.useState('')

  const { children } = usePassPropsToChildren(childrenProps, {
    disabled,
  })
  return (
    <RadioContext.Provider
      value={{
        checked,
        setChecked,
        name,
        error,
      }}
    >
      <RadioGroupStyle horizontal={horizontal}>
        {disabled ? children : childrenProps}
      </RadioGroupStyle>
    </RadioContext.Provider>
  )
}

export default RadioGroup
