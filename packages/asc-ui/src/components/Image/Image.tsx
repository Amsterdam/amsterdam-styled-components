import React from 'react'
import ImageStyle, { Props as ImageStyleProps } from './ImageStyle'

type Props = ImageStyleProps & React.ImgHTMLAttributes<HTMLImageElement>

const Image: React.FC<Props> = ({ square, ...otherProps }) => (
  <ImageStyle
    square={square}
    {...otherProps}
    {...(square && { 'data-object-fit': 'cover' })}
  />
)

export default Image
