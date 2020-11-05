import React, { AnchorHTMLAttributes, FunctionComponent } from 'react'
import FilterOptionStyle, { Props } from './FilterOptionStyle'

const FilterOption: FunctionComponent<
  Props & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...otherProps }) => (
  <FilterOptionStyle {...otherProps}>{children}</FilterOptionStyle>
)

export default FilterOption
