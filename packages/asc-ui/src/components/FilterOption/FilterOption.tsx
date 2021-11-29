import type { AnchorHTMLAttributes, FunctionComponent } from 'react'
import type { Props } from './FilterOptionStyle'
import FilterOptionStyle from './FilterOptionStyle'

const FilterOption: FunctionComponent<
  Props & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...otherProps }) => (
  <FilterOptionStyle {...otherProps}>{children}</FilterOptionStyle>
)

export default FilterOption
