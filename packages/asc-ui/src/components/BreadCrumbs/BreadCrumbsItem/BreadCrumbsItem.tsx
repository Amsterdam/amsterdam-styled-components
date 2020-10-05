import React from 'react'
import BreadCrumbsItemStyle, { liProps } from './BreadCrumbsItemStyle'

const BreadCrumbsItem: React.FC<liProps & React.HTMLAttributes<HTMLElement>> = ({ children, ...otherProps }) => (
  <BreadCrumbsItemStyle {...otherProps}>{children}</BreadCrumbsItemStyle>
)

export default BreadCrumbsItem

