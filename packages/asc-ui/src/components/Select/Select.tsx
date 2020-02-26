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
      <>
        {label && (
          <FormLabelStyle
            srOnly={srOnly}
            htmlFor={id}
            label={label}
            style={labelStyle}
          >
            {label}
          </FormLabelStyle>
        )}
        {errorMessage && (
          <FormLabelStyle
            srOnly={srOnly}
            htmlFor={id}
            error={errorMessage}
            style={errorStyle}
          >
            {errorMessage}
          </FormLabelStyle>
        )}
        <SelectStyle
          {...{
            ...otherProps,
            id,
            value,
          }}
          error={error}
          ref={ref}
        />
      </>
    )
  },
)

export default Select
