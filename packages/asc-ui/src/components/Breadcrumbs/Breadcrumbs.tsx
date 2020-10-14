import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsStyle from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <BreadcrumbsStyle className={className} {...otherProps}>
    <>{children}</>
  </BreadcrumbsStyle>
)

export default Breadcrumbs
