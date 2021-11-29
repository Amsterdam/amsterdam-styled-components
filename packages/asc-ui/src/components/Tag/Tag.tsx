import type { FunctionComponent, HTMLAttributes } from 'react'
import type { Props as TagStyleProps } from './TagStyle'
import TagStyle from './TagStyle'

export type Props = TagStyleProps & HTMLAttributes<HTMLSpanElement>

const Tag: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <TagStyle {...otherProps}>{children}</TagStyle>
)

Tag.defaultProps = {
  colorType: 'primary',
  colorSubtype: 'main',
}

export default Tag
