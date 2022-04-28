import type { HTMLAttributes } from 'react'
import { useState, useMemo } from 'react'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import type { Props } from './RadioGroupStyle'
import RadioGroupStyle from './RadioGroupStyle'
import RadioContext from './RadioContext'

function RadioGroup({
  disabled,
  error,
  name,
  horizontal,
  children: childrenProps,
  ...otherProps
}: Props & HTMLAttributes<HTMLDivElement>) {
  const [checked, setChecked] = useState('')
  const { children } = usePassPropsToChildren(childrenProps, {
    disabled,
  })

  const value = useMemo(
    () => ({
      checked,
      setChecked,
      name,
      error,
    }),
    [checked, name, error],
  )

  return (
    <RadioContext.Provider value={value}>
      <RadioGroupStyle horizontal={horizontal} {...otherProps}>
        {disabled ? children : childrenProps}
      </RadioGroupStyle>
    </RadioContext.Provider>
  )
}

export default RadioGroup
