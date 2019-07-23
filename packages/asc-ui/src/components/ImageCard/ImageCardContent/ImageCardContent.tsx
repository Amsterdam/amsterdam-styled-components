import React from 'react'
import ImageCardContentStyle, { Props } from './ImageCardContentStyle'

const ImageCardContent: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <ImageCardContentStyle {...otherProps}>{children}</ImageCardContentStyle>

export default ImageCardContent
