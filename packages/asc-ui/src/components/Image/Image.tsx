import 'objectFitPolyfill'
import React from 'react'
import ImageStyle, { Props } from './ImageStyle'

const Image: React.FC<Props> = ({ square, ...otherProps }) => (
  <ImageStyle
    square={square}
    {...otherProps}
    {...(square && { 'data-object-fit': 'cover' })}
  />
)

export default Image
