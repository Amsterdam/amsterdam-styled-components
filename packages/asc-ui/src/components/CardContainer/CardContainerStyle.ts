import styled from '@datapunt/asc-core'
import CardStyle from '../Card/CardStyle'

const CardContainerStyle = styled.div`
  width: 100%;
  padding: 24px;

  ${CardStyle} {
    margin-bottom: 12px;
  }
  ${/* sc-selector */ CardStyle}:last-of-type {
    margin-bottom: 0;
  }
`

export default CardContainerStyle
