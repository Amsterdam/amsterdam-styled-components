import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsStyle from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <BreadcrumbsStyle className={className} {...otherProps}>
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={String(index)}>{child}</React.Fragment>
    ))}
  </BreadcrumbsStyle>
)

export default Breadcrumbs
