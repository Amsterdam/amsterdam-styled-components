import React from 'react'
import FormTitleStyle from './FormTitleStyle'

const FormTitle: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <FormTitleStyle {...otherProps}>{children}</FormTitleStyle>

export default FormTitle
