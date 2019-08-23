import styled from '@datapunt/asc-core'
import CardStyle from './CardStyle'
import { breakpoint } from '../../utils'

const CardContainerStyle = styled.div`
  width: 100%;
  padding: 24px;

  @media screen and ${breakpoint('max-width', 'mobileL')} {
    padding: 20px;
  }

  ${CardStyle} {
    margin-bottom: 12px;
  }

  ${/* sc-selector */ CardStyle}:last-of-type {
    margin-bottom: 0;
  }
`

export default CardContainerStyle
