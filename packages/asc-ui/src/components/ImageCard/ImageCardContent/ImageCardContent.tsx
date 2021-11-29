import type { FunctionComponent, HTMLAttributes } from 'react'
import ImageCardContentStyle from './ImageCardContentStyle'

const ImageCardContent: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <ImageCardContentStyle {...otherProps}>{children}</ImageCardContentStyle>

export default ImageCardContent
