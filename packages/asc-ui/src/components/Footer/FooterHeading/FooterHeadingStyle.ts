import styled from 'styled-components'
import Heading, { Props } from '../../Heading/Heading'
import { themeColor } from '../../../utils'

export { Props }

const FooterHeadingStyle = styled(Heading)<Props>`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${themeColor('tint', 'level1')};
  display: flex;
`

export default FooterHeadingStyle
