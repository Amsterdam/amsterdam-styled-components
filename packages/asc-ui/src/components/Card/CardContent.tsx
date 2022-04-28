import type { HTMLAttributes } from 'react'
import CardContentStyle from './CardContentStyle'

function CardContent({
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  return <CardContentStyle {...otherProps}>{children}</CardContentStyle>
}

export default CardContent
