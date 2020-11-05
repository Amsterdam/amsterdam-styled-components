import React, { FunctionComponent } from 'react'
import EditorialContentStyle from './EditorialContentStyle'

const EditorialContent: FunctionComponent<
  React.HTMLAttributes<HTMLElement>
> = ({ children, ...otherProps }) => (
  <EditorialContentStyle {...otherProps}>{children}</EditorialContentStyle>
)

export default EditorialContent
