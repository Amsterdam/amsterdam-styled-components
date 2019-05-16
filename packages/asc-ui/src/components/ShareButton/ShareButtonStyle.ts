import styled from '@datapunt/asc-core'
import IconStyle from '../Icon/IconStyle'
import IconButtonStyle, {
  Props as IconButtonStyleProps,
} from '../IconButton/IconButtonStyle'
import { color, svgFill } from '../../utils'

export type Props = IconButtonStyleProps

const ShareButtonStyle = styled(IconButtonStyle)<Props>`
  padding: 0;
  position: relative;
  justify-content: center;
  background: ${color('tint', 'level5')};

  &:focus,
  &:hover {
    background: ${({ hoverColor }) => hoverColor || color('secondary')};
  }

  ${IconStyle} {
    ${({ theme }) => svgFill('tint', 'level1')({ theme })};
  }
`

export default ShareButtonStyle
