import type { FunctionComponent } from 'react'
import type { Props } from './CardStyle'
import CardStyle from './CardStyle'

const Card: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <CardStyle {...otherProps}>{children}</CardStyle>
)

export default Card
