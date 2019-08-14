import styled from '@datapunt/asc-core'
import { ListItem } from '../../List'
import LinkStyle from '../../Link/LinkStyle'
import { breakpoint } from '../../../utils'

const FooterBottomListItem = styled(ListItem)`
  margin-right: 52px;
  & > ${LinkStyle} {
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and ${breakpoint('max-width', 'tabletM')} {
    margin-right: 20px;
  }
`

export default FooterBottomListItem
