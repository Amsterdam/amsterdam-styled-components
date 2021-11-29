import type { FunctionComponent, HTMLAttributes } from 'react'
import FormTitleStyle from './FormTitleStyle'

const FormTitle: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) =>
  children ? <FormTitleStyle {...otherProps}>{children}</FormTitleStyle> : null

export default FormTitle
