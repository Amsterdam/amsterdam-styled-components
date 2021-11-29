import type { FunctionComponent } from 'react'
import type { Props } from './BackgroundImageStyle'
import BackgroundImageStyle from './BackgroundImageStyle'

const BackgroundImage: FunctionComponent<Props> = ({ ...otherProps }) => (
  <BackgroundImageStyle {...otherProps} />
)

BackgroundImage.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'auto',
}

export default BackgroundImage
