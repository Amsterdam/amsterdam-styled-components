import type { FunctionComponent, HTMLAttributes } from 'react'
import CardContentStyle from './CardContentStyle'

const CardContent: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...otherProps
}) => <CardContentStyle {...otherProps}>{children}</CardContentStyle>

export default CardContent
