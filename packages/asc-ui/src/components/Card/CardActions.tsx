import React from 'react'

import CardActionsStyle from './CardActionsStyle'

const CardActions: React.FC<{}> = ({ children, ...otherProps }) => (
  <CardActionsStyle {...otherProps}>{children}</CardActionsStyle>
)

export default CardActions
