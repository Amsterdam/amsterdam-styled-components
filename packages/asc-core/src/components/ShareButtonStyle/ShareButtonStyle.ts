import styled from '../../styled-components'
import IconStyle from '../IconStyle'
import IconButtonStyle, { IconButtonStyleProps } from '../IconButtonStyle'
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
