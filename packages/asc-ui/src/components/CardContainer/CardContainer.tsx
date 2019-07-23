import * as React from 'react'

import CardContainerStyle, { Props } from './CardContainerStyle'

const CardContainer: React.FC<Props> = ({ children, ...otherProps }) => (
  <CardContainerStyle {...otherProps}>{children}</CardContainerStyle>
)

export default CardContainer
