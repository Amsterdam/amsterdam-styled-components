import type { FunctionComponent, ImgHTMLAttributes } from 'react'
import type { Props as ImageStyleProps } from './ImageStyle'
import ImageStyle from './ImageStyle'

type Props = ImageStyleProps & ImgHTMLAttributes<HTMLImageElement>

const Image: FunctionComponent<Props> = ({ square, ...otherProps }) => (
  <ImageStyle
    square={square}
    {...otherProps}
    {...(square && { 'data-object-fit': 'cover' })}
  />
)

export default Image
