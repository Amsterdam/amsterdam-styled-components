import React from 'react'
import BreadCrumbsStyle, { ulProps } from './BreadCrumbsStyle'

const BreadCrumbs: React.FC<ulProps & React.HTMLAttributes<HTMLElement>> = ({ children, ...otherProps }) => (
  <BreadCrumbsStyle {...otherProps}>{children}</BreadCrumbsStyle>
)

export default BreadCrumbs

