import { FunctionComponent } from 'react'
import BackgroundImageStyle, { Props } from './BackgroundImageStyle'

const BackgroundImage: FunctionComponent<Props> = ({ ...otherProps }) => (
  <BackgroundImageStyle {...otherProps} />
)

BackgroundImage.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'auto',
}

export default BackgroundImage
