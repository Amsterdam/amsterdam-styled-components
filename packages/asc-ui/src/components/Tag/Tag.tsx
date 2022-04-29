import type { HTMLAttributes } from 'react'
import type { Props as TagStyleProps } from './TagStyle'
import TagStyle from './TagStyle'

export type Props = TagStyleProps & HTMLAttributes<HTMLSpanElement>

function Tag({ children, ...otherProps }: Props) {
  return <TagStyle {...otherProps}>{children}</TagStyle>
}

Tag.defaultProps = {
  colorType: 'primary',
  colorSubtype: 'main',
}

export default Tag
