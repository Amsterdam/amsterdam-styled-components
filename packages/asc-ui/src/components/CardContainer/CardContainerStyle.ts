import styled from '@datapunt/asc-core'
import CardStyle from '../Card/CardStyle'
import { breakpoint } from '../../utils'

export type Props = {
  maxWidth?: number
}

const CardContainerStyle = styled.div<Props>`
  padding: 48px 24px;

  ${/* sc-selector */ CardStyle}:not(:last-of-type) {
    margin-bottom: 12px;
  }

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    ${({ maxWidth }) => `max-width: ${maxWidth}px;`}
    padding: 48px;
  }
`

export default CardContainerStyle
