import type { HTMLAttributes } from 'react'
import ImageCardContentStyle from './ImageCardContentStyle'

function ImageCardContent({
  children,
  ...otherProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <ImageCardContentStyle {...otherProps}>{children}</ImageCardContentStyle>
  )
}

export default ImageCardContent
