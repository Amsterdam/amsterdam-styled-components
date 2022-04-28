import type { Props } from './BackgroundImageStyle'
import BackgroundImageStyle from './BackgroundImageStyle'

function BackgroundImage({ ...otherProps }: Props) {
  return <BackgroundImageStyle {...otherProps} />
}

BackgroundImage.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'auto',
}

export default BackgroundImage
