import React from 'react'

import CardStyle, { Props } from './CardStyle'

const Card: React.FC<Props> = ({ children, ...otherProps }) => (
  <CardStyle {...otherProps}>{children}</CardStyle>
)

export default Card
