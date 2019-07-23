import React from 'react'
import ImageCardContentStyle from './ImageCardContentStyle'

const ImageCardContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <ImageCardContentStyle {...otherProps}>{children}</ImageCardContentStyle>

export default ImageCardContent
