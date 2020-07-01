import styled from 'styled-components'
import Heading from '../Heading/Heading'
import { themeColor, themeSpacing } from '../../utils'

const FooterHeading = styled(Heading)`
  margin-top: 0;
  margin-bottom: ${themeSpacing(3)};
  color: ${themeColor('tint', 'level1')};
  background-color: transparent;
  display: flex;
`

FooterHeading.defaultProps = {
  forwardedAs: 'h3',
  styleAs: 'h2',
}

export default FooterHeading
