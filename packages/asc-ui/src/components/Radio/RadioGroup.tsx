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
  ...otherProps
}) => {
  const [checked, setChecked] = React.useState('')

  // Reset checked value if `name` changes (to fix re-rendering)
  React.useEffect(() => {
    setChecked('')
  }, [name])

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
