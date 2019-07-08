import styled from '@datapunt/asc-core'
import { breakpoint, color } from '../../utils'
import ParagraphStyle from './ParagraphStyle'

export default styled(ParagraphStyle)`
  font-weight: 700;
  margin: 24px 0 16px;
  color: ${color('tint', 'level7')};

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin: 25px 0;
  }
`
