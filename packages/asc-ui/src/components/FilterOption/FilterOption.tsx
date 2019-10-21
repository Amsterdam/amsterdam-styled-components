import React from 'react'
import FilterOptionStyle, { Props } from './FilterOptionStyle'

const FilterOption: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <FilterOptionStyle {...otherProps}>{children}</FilterOptionStyle>

export default FilterOption
