import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsItemStyle, { liProps } from './BreadcrumbsItemStyle'

const BreadcrumbsItem: FunctionComponent<
  liProps & HTMLAttributes<HTMLLIElement>
> = ({ children, href, className, ...otherProps }) => (
  <BreadcrumbsItemStyle className={className} {...otherProps}>
    <a href={href}>{children}</a>
  </BreadcrumbsItemStyle>
)

export default BreadcrumbsItem
