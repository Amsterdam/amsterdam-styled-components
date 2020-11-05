import React, { FunctionComponent } from 'react'
import EditorialSidebarStyle from './EditorialSidebarStyle'

const EditorialContent: FunctionComponent<
  React.HTMLAttributes<HTMLElement>
> = ({ children, ...otherProps }) => (
  <EditorialSidebarStyle {...otherProps}>{children}</EditorialSidebarStyle>
)

export default EditorialContent
