import React from 'react'
import EditorialBodyStyle, { Props } from './EditorialBodyStyle'

const EditorialBody: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialBodyStyle {...otherProps}>{children}</EditorialBodyStyle>

export default EditorialBody
