import type { PropsWithChildren } from 'react'
import type { Props } from './CardStyle'
import CardStyle from './CardStyle'

function Card({ children, ...otherProps }: PropsWithChildren<Props>) {
  return <CardStyle {...otherProps}>{children}</CardStyle>
}

export default Card
