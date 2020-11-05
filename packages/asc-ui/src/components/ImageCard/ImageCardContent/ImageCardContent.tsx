import React, { FunctionComponent } from 'react'
import ImageCardContentStyle from './ImageCardContentStyle'

const ImageCardContent: FunctionComponent<
  React.HTMLAttributes<HTMLElement>
> = ({ children, ...otherProps }) => (
  <ImageCardContentStyle {...otherProps}>{children}</ImageCardContentStyle>
)

export default ImageCardContent
