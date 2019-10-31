import React from 'react'

import { Close } from '@datapunt/asc-assets'
import Tag, { Props as TagProps } from '../Tag/Tag'
import FilterTagStyle from './FilterTagStyle'
import Icon from '../Icon'

export interface FilterTagProps extends TagProps {
  onClick?: Function
}

const FilterTag: React.FC<FilterTagProps> = ({
  children,
  onClick,
  ...otherProps
}) => (
  <FilterTagStyle {...otherProps} onClick={onClick}>
    {children}
    <Icon inline size={14} color="primary">
      <Close />
    </Icon>
  </FilterTagStyle>
)

FilterTag.defaultProps = {
  ...Tag.defaultProps,
  onClick: (): void => {},
}

export default FilterTag
