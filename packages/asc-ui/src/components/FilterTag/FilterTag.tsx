import { Close } from '@amsterdam/asc-assets'
import type { ButtonHTMLAttributes } from 'react'
import Icon from '../Icon'
import type { Props as TagProps } from '../Tag/Tag'
import Tag from '../Tag/Tag'
import FilterTagStyle from './FilterTagStyle'

export type FilterTagProps = TagProps

function FilterTag({
  children,
  ...otherProps
}: FilterTagProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <FilterTagStyle {...otherProps}>
      {children}
      <Icon inline size={14} color="primary">
        <Close />
      </Icon>
    </FilterTagStyle>
  )
}

FilterTag.defaultProps = Tag.defaultProps

export default FilterTag
