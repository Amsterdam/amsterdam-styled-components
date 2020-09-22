import { Close } from '@amsterdam/asc-assets'
import React from 'react'
import Icon from '../Icon'
import Tag, { Props as TagProps } from '../Tag/Tag'
import FilterTagStyle from './FilterTagStyle'

export interface FilterTagProps extends TagProps {}

const FilterTag: React.FC<
  FilterTagProps & React.ButtonHTMLAttributes<HTMLButtonElement>
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
