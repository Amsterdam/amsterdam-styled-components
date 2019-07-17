import * as React from 'react'
import CardMediaStyle, { CardMediaWrapperStyle } from './CardMediaStyle'

const CardMedia: React.FC<{}> = ({ children, ...otherProps }) => (
  <CardMediaStyle {...otherProps}>
    <CardMediaWrapperStyle>{children}</CardMediaWrapperStyle>
  </CardMediaStyle>
)

export default CardMedia
