import type { Props } from './CardStyle'
import CardStyle from './CardStyle'

function Card({ children, ...otherProps }: Props) {
  return <CardStyle {...otherProps}>{children}</CardStyle>
}

export default Card
