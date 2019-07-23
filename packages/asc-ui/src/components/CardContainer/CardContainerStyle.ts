import styled from '@datapunt/asc-core'
import CardStyle from '../Card/CardStyle'

export type Props = {
  maxWidth?: number
}

const CardContainerStyle = styled.div<Props>`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  padding: 48px 48px;

  ${/* sc-selector */ CardStyle}:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

export default CardContainerStyle
