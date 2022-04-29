import type { HTMLAttributes } from 'react'
import CardActionsStyle from './CardActionsStyle'

function CardActions({
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  return <CardActionsStyle {...otherProps}>{children}</CardActionsStyle>
}

export default CardActions
