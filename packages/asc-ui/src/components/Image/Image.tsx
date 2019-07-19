import React from 'react'
import ImageStyle, { Props } from './ImageStyle'

const Image: React.FC<Props> = ({ ...otherProps }) => (
  <ImageStyle {...otherProps} />
)

export default Image
