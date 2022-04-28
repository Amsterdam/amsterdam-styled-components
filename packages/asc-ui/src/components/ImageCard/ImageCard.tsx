import type { HTMLAttributes } from 'react'
import type { WrapperProps, Props } from './ImageCardStyle'
import ImageCardStyle, { ImageCardWrapperStyle } from './ImageCardStyle'

function ImageCard({
  children,
  backgroundImage,
  margin,
  ...otherProps
}: Props & WrapperProps & HTMLAttributes<HTMLElement>) {
  return (
    <ImageCardWrapperStyle margin={margin}>
      <ImageCardStyle backgroundImage={backgroundImage} {...otherProps}>
        {children}
      </ImageCardStyle>
    </ImageCardWrapperStyle>
  )
}

export default ImageCard
