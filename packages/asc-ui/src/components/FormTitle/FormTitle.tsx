import React, { FunctionComponent } from 'react'
import FormTitleStyle from './FormTitleStyle'

const FormTitle: FunctionComponent<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) =>
  children ? <FormTitleStyle {...otherProps}>{children}</FormTitleStyle> : null

export default FormTitle
