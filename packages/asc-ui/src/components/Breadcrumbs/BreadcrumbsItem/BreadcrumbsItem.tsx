import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsItemStyle from './BreadcrumbsItemStyle'

const BreadcrumbsItem: FunctionComponent<HTMLAttributes<HTMLLIElement>> = ({
  children,
  ...otherProps
}) => <BreadcrumbsItemStyle {...otherProps}>{children}</BreadcrumbsItemStyle>

export default BreadcrumbsItem
