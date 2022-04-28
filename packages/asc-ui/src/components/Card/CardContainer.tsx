import type { ReactNode } from 'react'
import CardContainerStyle from './CardContainerStyle'

interface Props {
  children?: ReactNode
}

function CardContainer({ children, ...otherProps }: Props) {
  return <CardContainerStyle {...otherProps}>{children}</CardContainerStyle>
}

export default CardContainer
