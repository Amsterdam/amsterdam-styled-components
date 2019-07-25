import styled from '@datapunt/asc-core'
import { color } from '../../../utils'
import HeadingStyle from '../../Heading/HeadingStyle'

type Props = React.HTMLAttributes<HTMLHeadingElement>

const FooterHeading = styled(HeadingStyle)<Props>`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${color('tint', 'level1')};
  display: flex;
`

FooterHeading.defaultProps = {
  as: 'h3',
  styleAs: 'h3',
}

export default FooterHeading
