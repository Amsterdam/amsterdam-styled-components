import React from 'react'
import { Close } from '@datapunt/asc-assets'
import Tag, { Props as TagProps } from '../Tag/Tag'
import FilterTagStyle from './FilterTagStyle'
import Icon from '../Icon'

export interface FilterTagProps extends TagProps {}

const FilterTag: React.FC<FilterTagProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => (
  <FilterTagStyle forwardedAs="button" {...otherProps}>
    {children}
    <Icon inline size={14} color="primary">
      <Close />
    </Icon>
  </FilterTagStyle>
)

FilterTag.defaultProps = Tag.defaultProps

export default FilterTag
