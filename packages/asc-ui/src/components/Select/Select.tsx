import React from 'react'
import FormLabelStyle from '../FormLabelStyle'
import SelectStyle, { Props, SelectIcon, SelectWrapper } from './SelectStyle'

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
        <SelectWrapper>
          <SelectStyle
            {...{
              ...otherProps,
              id,
              value,
            }}
            error={error}
            ref={ref}
          />
          <SelectIcon />
        </SelectWrapper>
      </>
    )
  },
)

export default Select
