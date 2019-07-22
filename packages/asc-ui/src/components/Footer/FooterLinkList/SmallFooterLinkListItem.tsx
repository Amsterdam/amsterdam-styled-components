import styled from '@datapunt/asc-core'
import { LinkListItem } from '../../LinkList'
import LinkStyle from '../../Link/LinkStyle'
import { breakpoint } from '../../../utils'

const SmallFooterLinkListItem = styled(LinkListItem)`
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

export default SmallFooterLinkListItem
