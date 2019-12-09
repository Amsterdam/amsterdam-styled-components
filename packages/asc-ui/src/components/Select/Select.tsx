import React from 'react'
import SelectStyle, { Props } from './SelectStyle'

const Select: React.FC<Props & React.HTMLAttributes<HTMLSelectElement>> = ({
  id,
  value,
  error,
  ...otherProps
}) => (
  <SelectStyle
    {...{
      ...otherProps,
      id,
      value,
      error,
    }}
  />
)

export default Select
