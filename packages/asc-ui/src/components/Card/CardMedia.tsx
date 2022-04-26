import type { Props } from './CardMediaStyle'
import CardMediaStyle, { CardMediaWrapperStyle } from './CardMediaStyle'

function CardMedia({ children, ...otherProps }: Props) {
  return (
    <CardMediaWrapperStyle {...otherProps}>
      <CardMediaStyle>{children}</CardMediaStyle>
    </CardMediaWrapperStyle>
  )
}

export default CardMedia
