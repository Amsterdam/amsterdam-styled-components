import styled from '@datapunt/asc-core'
import { color, svgFill } from '../../../../utils'
import LinkList, { LinkListItem } from '../../../LinkList'
import TypographyStyle from '../../../Typography/TypographyStyle'
import IconStyle from '../../../Icon/IconStyle'
import LinkStyle from '../../../Link/LinkStyle'

export const InverterdLinkList = styled(LinkList)`
  background-color: ${color('tint', 'level5')};
`

export const InverterdLinkListItem = styled(LinkListItem)`
  ${TypographyStyle} {
    color: ${color('tint', 'level1')};
  }

  ${IconStyle} {
    & > svg {
      ${svgFill('tint', 'level1')};
    }
  }

  ${LinkStyle} {
    color: ${color('tint', 'level1')};

    &:hover {
      color: ${color('tint', 'level1')};
      ${IconStyle} > svg {
        ${svgFill('tint', 'level1')};
      }
    }
  }
`
