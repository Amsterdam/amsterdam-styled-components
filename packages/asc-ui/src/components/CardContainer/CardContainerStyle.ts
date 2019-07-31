import styled from '@datapunt/asc-core'
import CardStyle from '../Card/CardStyle'
import { breakpoint } from '../../utils'

export type Props = {
  maxWidth?: number
}

const CardContainerStyle = styled.div<Props>`
  padding: 24px;

  ${CardStyle} {
    margin-bottom: 12px;
  }
  ${/* sc-selector */ CardStyle}:last-of-type {
    margin-bottom: 0;
  }

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    ${({ maxWidth }) => `max-width: ${maxWidth}px;`}
  }
`

export default CardContainerStyle
