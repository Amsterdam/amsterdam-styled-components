import React from 'react'
import EditorialContentStyle from './EditorialContentStyle'

const EditorialContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialContentStyle {...otherProps}>{children}</EditorialContentStyle>

export default EditorialContent
