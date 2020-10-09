import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsStyle from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <BreadcrumbsStyle className={className} {...otherProps}>
    <React.Fragment>{children}</React.Fragment>
  </BreadcrumbsStyle>
)

export default Breadcrumbs
