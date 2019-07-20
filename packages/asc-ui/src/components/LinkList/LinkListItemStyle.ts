import styled from '@datapunt/asc-core'
import LinkStyle from '../Link/LinkStyle'
import { color, svgFill } from '../../utils'
import IconStyle from '../Icon/IconStyle'
import TypographyStyle from '../Typography/TypographyStyle'

export type Props = {
  inverted?: boolean
}

export default styled.li<Props>`
  position: relative;
  word-break: break-word;
  margin-bottom: 8px;

  ${TypographyStyle} {
    font-weight: 700;
    display: block;
    color: ${({ inverted }) =>
      inverted ? color('tint', 'level1') : color('tint', 'level6')};
  }

  ${IconStyle} {
    position: absolute;
    left: 0;
    top: 3px;

    & > svg {
      ${({ inverted }) =>
        inverted ? svgFill('tint', 'level1') : svgFill('default')};
    }
  }

  ${LinkStyle} {
    padding-left: 15px;
    color: ${({ inverted }) =>
      inverted ? color('tint', 'level1') : color('tint', 'level7')};
    text-decoration: none;
    font-weight: 700;

    &:hover {
      color: ${({ inverted }) =>
        inverted ? color('tint', 'level1') : color('secondary')};
      text-decoration: ${({ inverted }) => (inverted ? 'underline' : 'none')};
      ${IconStyle} > svg {
        ${({ inverted }) =>
          inverted ? svgFill('tint', 'level1') : svgFill('secondary')};
      }
    }
  }
`
