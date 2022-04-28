import type { AnchorHTMLAttributes } from 'react'
import type { Props } from './FilterOptionStyle'
import FilterOptionStyle from './FilterOptionStyle'

function FilterOption({
  children,
  ...otherProps
}: Props & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <FilterOptionStyle {...otherProps}>{children}</FilterOptionStyle>
}

export default FilterOption
