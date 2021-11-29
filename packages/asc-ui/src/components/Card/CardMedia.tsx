import type { FunctionComponent } from 'react'
import type { Props } from './CardMediaStyle'
import CardMediaStyle, { CardMediaWrapperStyle } from './CardMediaStyle'

const CardMedia: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <CardMediaWrapperStyle {...otherProps}>
    <CardMediaStyle>{children}</CardMediaStyle>
  </CardMediaWrapperStyle>
)

export default CardMedia
