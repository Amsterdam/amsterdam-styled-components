import React from 'react'

import { Props as TagProps } from '../Tag/Tag'
import TagStyle from '../Tag/TagStyle'

const FilterTag: React.FC<TagProps> = ({ children, ...otherProps }) => (
  <TagStyle {...otherProps}>
    {children}
    <a href="#close">x</a>
  </TagStyle>
)

export default FilterTag
