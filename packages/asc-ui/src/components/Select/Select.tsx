import React from 'react'
import SelectStyle, { Props } from './SelectStyle'
import FormLabelStyle from '../FormLabelStyle'

const Select: React.FC<Props & React.HTMLAttributes<HTMLSelectElement>> = ({
  id,
  value,
  label,
  error: errorProp,
  errorMessage,
  ...otherProps
}) => {
  const error = errorProp || errorMessage

  return (
    <>
      {label && <FormLabelStyle htmlFor={id}>{label}</FormLabelStyle>}
      {errorMessage && (
        <FormLabelStyle htmlFor={id}>{errorMessage}</FormLabelStyle>
      )}
      <SelectStyle
        {...{
          ...otherProps,
          id,
          value,
        }}
        error={error}
      />
    </>
  )
}

export default Select
