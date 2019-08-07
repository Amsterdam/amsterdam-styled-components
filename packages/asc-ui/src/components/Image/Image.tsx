import React from 'react'
import ImageStyle from './ImageStyle'

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  ...otherProps
}) => <ImageStyle {...otherProps} />

export default Image
