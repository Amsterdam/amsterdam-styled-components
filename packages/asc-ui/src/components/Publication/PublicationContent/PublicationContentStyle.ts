import styled from '@datapunt/asc-core'
import { breakpoint } from '../../../utils'
import SummaryStyle from '../../Typography/SummaryStyle'

const PublicationContentStyle = styled.div`
  & > ${SummaryStyle} {
    margin-top: 0;
    margin-bottom: 24px;

    @media screen and ${breakpoint('max-width', 'tabletM')} {
      margin-bottom: 20px;
    }
  }

  & > p:last-child {
    margin: 0;
  }
`

export default PublicationContentStyle
