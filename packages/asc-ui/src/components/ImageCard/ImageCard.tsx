import type { FunctionComponent, HTMLAttributes } from 'react'
import type { WrapperProps, Props } from './ImageCardStyle'
import ImageCardStyle, { ImageCardWrapperStyle } from './ImageCardStyle'

const ImageCard: FunctionComponent<
  Props & WrapperProps & HTMLAttributes<HTMLElement>
> = ({ children, backgroundImage, margin, ...otherProps }) => (
  <ImageCardWrapperStyle margin={margin}>
    <ImageCardStyle backgroundImage={backgroundImage} {...otherProps}>
      {children}
    </ImageCardStyle>
  </ImageCardWrapperStyle>
)

export default ImageCard
