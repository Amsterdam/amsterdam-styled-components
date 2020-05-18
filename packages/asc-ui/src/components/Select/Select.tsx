import React from 'react'
import FormLabelStyle from '../FormLabelStyle'
import SelectStyle, { Props, SelectIcon, SelectWrapper } from './SelectStyle'

const Select = React.forwardRef<
  HTMLSelectElement,
  Props & React.HTMLAttributes<HTMLSelectElement>
>(
  (
    { id, value, label, srOnly: srOnlyProp, error, labelStyle, ...otherProps },
    ref,
  ) => {
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
        <SelectWrapper>
          <SelectStyle
            {...{
              ...otherProps,
              id,
              value,
              error,
            }}
            ref={ref}
          />
          <SelectIcon />
        </SelectWrapper>
      </>
    )
  },
)

export default Select
