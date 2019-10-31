import React, { useState } from 'react'

import { Close } from '@datapunt/asc-assets'
import Tag, { Props as TagProps } from '../Tag/Tag'
import FilterTagStyle from './FilterTagStyle'
import Icon from '../Icon'

export interface FilterTagProps extends TagProps {}

const FilterTag: React.FC<FilterTagProps> = ({ children, ...otherProps }) => {
  const [display, setDisplay] = useState(true)

  const onClick = (): void => setDisplay(false)

  if (!display) {
    return null
  }

  return (
    <FilterTagStyle {...otherProps} onClick={onClick}>
      {children}
      <Icon inline size={14} color="primary">
        <Close />
      </Icon>
    </FilterTagStyle>
  )
}

FilterTag.defaultProps = Tag.defaultProps

export default FilterTag
