import styled from '@datapunt/asc-core'
import CardStyle from './CardStyle'

const CardContainerStyle = styled.div`
  width: 100%;

  ${CardStyle} {
    margin-bottom: 12px;
  }

  ${/* sc-selector */ CardStyle}:last-of-type {
    margin-bottom: 0;
  }
`

export default CardContainerStyle
