import { FunctionComponent } from 'react'
import CardMediaStyle, { CardMediaWrapperStyle, Props } from './CardMediaStyle'

const CardMedia: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <CardMediaWrapperStyle {...otherProps}>
    <CardMediaStyle>{children}</CardMediaStyle>
  </CardMediaWrapperStyle>
)

export default CardMedia
