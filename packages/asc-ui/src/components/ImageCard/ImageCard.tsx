import { FunctionComponent, HTMLAttributes } from 'react'
import ImageCardStyle, {
  ImageCardWrapperStyle,
  WrapperProps,
  Props,
} from './ImageCardStyle'

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
