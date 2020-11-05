import React, { FunctionComponent } from 'react'
import ImageCardStyle, {
  ImageCardWrapperStyle,
  WrapperProps,
  Props,
} from './ImageCardStyle'

const ImageCard: FunctionComponent<
  Props & WrapperProps & React.HTMLAttributes<HTMLElement>
> = ({ children, backgroundImage, margin, ...otherProps }) => (
  <ImageCardWrapperStyle margin={margin}>
    <ImageCardStyle backgroundImage={backgroundImage} {...otherProps}>
      {children}
    </ImageCardStyle>
  </ImageCardWrapperStyle>
)

export default ImageCard
