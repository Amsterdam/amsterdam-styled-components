import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsStyle from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => <BreadcrumbsStyle {...otherProps}>{children}</BreadcrumbsStyle>

export default Breadcrumbs
