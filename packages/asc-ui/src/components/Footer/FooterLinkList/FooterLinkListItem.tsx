import styled from '@datapunt/asc-core'
import { color, svgFill } from '../../../utils'
import { ListItem } from '../../List'
import TypographyStyle from '../../Typography/TypographyStyle'
import IconStyle from '../../Icon/IconStyle'
import LinkStyle from '../../Link/LinkStyle'

const FooterListItem = styled(ListItem)`
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

export default FooterListItem
