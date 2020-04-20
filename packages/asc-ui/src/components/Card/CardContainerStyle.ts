import styled from 'styled-components'
import CardStyle from './CardStyle'

const CardContainerStyle = styled.div`
  width: 100%;

  ${CardStyle} {
    margin-bottom: 12px;
  }
`

export default CardContainerStyle
