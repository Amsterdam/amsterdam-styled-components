import styled from '@datapunt/asc-core'
import Heading, { Props } from '../../Heading/Heading'
import { color } from '../../../utils'

export { Props }

const FooterHeadingStyle = styled(Heading)<Props>`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${color('tint', 'level1')};
  display: flex;
`

export default FooterHeadingStyle
