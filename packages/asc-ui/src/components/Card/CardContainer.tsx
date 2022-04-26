import CardContainerStyle from './CardContainerStyle'

function CardContainer({ children, ...otherProps }) {
  return <CardContainerStyle {...otherProps}>{children}</CardContainerStyle>
}

export default CardContainer
