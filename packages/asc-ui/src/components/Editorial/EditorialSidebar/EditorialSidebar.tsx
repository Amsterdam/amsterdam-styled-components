import React from 'react'
import EditorialSidebarStyle from './EditorialSidebarStyle'

const EditorialContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialSidebarStyle {...otherProps}>{children}</EditorialSidebarStyle>

export default EditorialContent
