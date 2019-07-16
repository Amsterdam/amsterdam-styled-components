import styled from '@datapunt/asc-core'
import LinkStyle from '../Typography/LinkStyle'
import { color, svgFill } from '../../utils'
import IconStyle from '../Icon/IconStyle'
import TypographyStyle from '../Typography/TypographyStyle'

export default styled.li`
  position: relative;
  word-break: break-word;
  margin-bottom: 8px;

  ${TypographyStyle} {
    font-weight: 700;
    display: block;
    color: ${color('tint', 'level6')};
  }

  ${IconStyle} {
    position: absolute;
    left: 0;
    top: 3px;
  }

  ${LinkStyle} {
    padding-left: 15px;
    color: ${color('tint', 'level7')};
    text-decoration: none;
    font-weight: 700;

    &:hover {
      color: ${color('secondary')};
      ${IconStyle} > svg {
        ${svgFill('secondary')};
      }
    }
  }
`
