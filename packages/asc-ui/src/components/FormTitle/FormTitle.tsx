import type { HTMLAttributes } from 'react'
import FormTitleStyle from './FormTitleStyle'

function FormTitle({ children, ...otherProps }: HTMLAttributes<HTMLElement>) {
  return children ? (
    <FormTitleStyle {...otherProps}>{children}</FormTitleStyle>
  ) : null
}

export default FormTitle
