import React from 'react'
import BackgroundImageStyle, { Props } from './BackgroundImageStyle'

const BackgroundImage: React.FC<Props> = ({ ...otherProps }) => (
  <BackgroundImageStyle {...otherProps} />
)

BackgroundImage.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'auto',
}

export default BackgroundImage
