import React, { FunctionComponent } from 'react'
import TagStyle, { Props as TagStyleProps } from './TagStyle'

export type Props = TagStyleProps & React.HTMLAttributes<HTMLSpanElement>

const Tag: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <TagStyle {...otherProps}>{children}</TagStyle>
)

Tag.defaultProps = {
  colorType: 'primary',
  colorSubtype: 'main',
}

export default Tag
