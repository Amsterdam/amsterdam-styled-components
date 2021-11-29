import { Close } from '@amsterdam/asc-assets'
import type { ButtonHTMLAttributes, FunctionComponent } from 'react'
import Icon from '../Icon'
import type { Props as TagProps } from '../Tag/Tag'
import Tag from '../Tag/Tag'
import FilterTagStyle from './FilterTagStyle'

export type FilterTagProps = TagProps

const FilterTag: FunctionComponent<
  FilterTagProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...otherProps }) => (
  <FilterTagStyle {...otherProps}>
    {children}
    <Icon inline size={14} color="primary">
      <Close />
    </Icon>
  </FilterTagStyle>
)

FilterTag.defaultProps = Tag.defaultProps

export default FilterTag
