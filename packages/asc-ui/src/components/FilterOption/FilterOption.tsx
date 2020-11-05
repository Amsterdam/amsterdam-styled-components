import React, { FunctionComponent } from 'react'
import FilterOptionStyle, { Props } from './FilterOptionStyle'

const FilterOption: FunctionComponent<
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...otherProps }) => (
  <FilterOptionStyle {...otherProps}>{children}</FilterOptionStyle>
)

export default FilterOption
