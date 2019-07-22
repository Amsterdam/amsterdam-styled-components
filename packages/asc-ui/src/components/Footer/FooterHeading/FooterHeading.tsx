import styled from '@datapunt/asc-core'
import Heading from '../../Heading'
import { color } from '../../../utils'

const FooterHeading = styled(Heading)`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${color('tint', 'level1')};
  display: flex;
`

export default FooterHeading
