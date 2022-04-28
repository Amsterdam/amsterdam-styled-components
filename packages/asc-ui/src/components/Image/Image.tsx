import type { ImgHTMLAttributes } from 'react'
import type { Props as ImageStyleProps } from './ImageStyle'
import ImageStyle from './ImageStyle'

type Props = ImageStyleProps & ImgHTMLAttributes<HTMLImageElement>

function Image({ square, ...otherProps }: Props) {
  return (
    <ImageStyle
      square={square}
      {...otherProps}
      {...(square && { 'data-object-fit': 'cover' })}
    />
  )
}

export default Image
