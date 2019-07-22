import styled from '@datapunt/asc-core'
import { color, svgFill } from '../../../utils'
import { LinkListItem } from '../../LinkList'
import TypographyStyle from '../../Typography/TypographyStyle'
import IconStyle from '../../Icon/IconStyle'
import LinkStyle from '../../Link/LinkStyle'

const FooterLinkListItem = styled(LinkListItem)`
  ${TypographyStyle} {
    color: ${color('tint', 'level1')};
  }

  ${IconStyle} {
    ${svgFill('tint', 'level1')};
  }

  ${LinkStyle} {
    color: ${color('tint', 'level1')};

    &:hover {
      color: ${color('tint', 'level1')};
      text-decoration: underline;

      ${IconStyle} {
        ${svgFill('tint', 'level1')};
      }
    }
  }
`

export default FooterLinkListItem
