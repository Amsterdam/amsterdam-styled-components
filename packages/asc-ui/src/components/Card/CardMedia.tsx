import React from 'react'
import CardMediaStyle, { CardMediaWrapperStyle, Props } from './CardMediaStyle'

const CardMedia: React.FC<Props> = ({ children, ...otherProps }) => (
  <CardMediaWrapperStyle {...otherProps}>
    <CardMediaStyle>{children}</CardMediaStyle>
  </CardMediaWrapperStyle>
)

export default CardMedia
