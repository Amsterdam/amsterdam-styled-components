import styled from '@datapunt/asc-core'
import Heading from '../../Heading'
import { color, svgFill } from '../../../utils'
import IconStyle from '../../Icon/IconStyle'

export const FooterHeading = styled(Heading)`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${color('tint', 'level1')};
  display: flex;
`

export const ExpandableFooterHeading = styled(FooterHeading)`
  margin-bottom: ${({ open }) => (open ? '0' : '8px')};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  & > ${IconStyle} {
    margin-right: 8px;
    & > svg {
      ${svgFill('tint', 'level1')};
    }
  }
`
