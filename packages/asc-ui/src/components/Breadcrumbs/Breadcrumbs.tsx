import React, { Fragment, FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsStyle from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <BreadcrumbsStyle className={className} {...otherProps}>
    <Fragment>{children}</Fragment>
  </BreadcrumbsStyle>
)

export default Breadcrumbs
