import React from 'react'
import SelectStyle, { Props } from './SelectStyle'
import FormLabelStyle from '../FormLabelStyle'

const Select = React.forwardRef<
  HTMLSelectElement,
  Props & React.HTMLAttributes<HTMLSelectElement>
>(
  (
    {
      id,
      value,
      label,
      srOnly: srOnlyProp,
      error: errorProp,
      errorMessage,
      labelStyle,
      errorStyle,
      ...otherProps
    },
    ref,
  ) => {
    const error = errorProp || errorMessage
    const srOnly = srOnlyProp || false

    return (
      <FormLabelStyle
        htmlFor={id}
        srOnly={srOnly}
        label={label}
        error={errorMessage}
        style={errorMessage ? errorStyle : labelStyle}
      >
        {errorMessage || label}
        <SelectStyle
          {...{
            ...otherProps,
            id,
            value,
            error,
            ref,
            hasLabel: !!errorMessage || !!label,
          }}
        />
      </FormLabelStyle>
    )
  },
)

export default Select
