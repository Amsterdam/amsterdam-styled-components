import React, { FunctionComponent, HTMLAttributes, useState } from 'react'

import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import RadioGroupStyle, { Props } from './RadioGroupStyle'
import RadioContext from './RadioContext'

const RadioGroup: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  error,
  name,
  horizontal,
  children: childrenProps,
  ...otherProps
}) => {
  const [checked, setChecked] = useState('')
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
      <RadioGroupStyle horizontal={horizontal} {...otherProps}>
        {disabled ? children : childrenProps}
      </RadioGroupStyle>
    </RadioContext.Provider>
  )
}

export default RadioGroup
