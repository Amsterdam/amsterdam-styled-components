import React from 'react'

import CardContentStyle from './CardContentStyle'

const CardContent: React.FC<{}> = ({ children, ...otherProps }) => (
  <CardContentStyle {...otherProps}>{children}</CardContentStyle>
)

export default CardContent
