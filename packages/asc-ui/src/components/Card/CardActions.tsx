import type { FunctionComponent, HTMLAttributes } from 'react'
import CardActionsStyle from './CardActionsStyle'

const CardActions: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...otherProps
}) => <CardActionsStyle {...otherProps}>{children}</CardActionsStyle>

export default CardActions
