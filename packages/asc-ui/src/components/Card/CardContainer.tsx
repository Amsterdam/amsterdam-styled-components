import type { FunctionComponent } from 'react'
import CardContainerStyle from './CardContainerStyle'

const CardContainer: FunctionComponent = ({ children, ...otherProps }) => (
  <CardContainerStyle {...otherProps}>{children}</CardContainerStyle>
)

export default CardContainer
