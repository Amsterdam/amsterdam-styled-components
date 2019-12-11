import React from 'react'
import SelectStyle, { Props } from './SelectStyle'
import FormLabelStyle from '../FormLabelStyle'

const Select: React.FC<Props & React.HTMLAttributes<HTMLSelectElement>> = ({
  id,
  value,
  label,
  error,
  ...otherProps
}) => (
  <>
    {label && <FormLabelStyle htmlFor={id}>{label}</FormLabelStyle>}
    <SelectStyle
      {...{
        ...otherProps,
        id,
        value,
        error,
      }}
    />
  </>
)

export default Select
