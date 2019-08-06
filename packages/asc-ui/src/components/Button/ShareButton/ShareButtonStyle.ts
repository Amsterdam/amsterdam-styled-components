import styled from '@datapunt/asc-core'
import IconStyle from '../../Icon/IconStyle'
import { color, svgFill } from '../../../utils'
import ButtonStyle, { Props as ButtonProps } from '../ButtonStyle'

export type Props = {
  hoverColor?: string
} & ButtonProps

const ShareButtonStyle = styled(ButtonStyle)<Props>`
  padding: 0;
  position: relative;
  justify-content: center;
  background: ${color('tint', 'level5')};

  &:focus,
  &:hover {
    background: ${({ hoverColor }) => hoverColor || color('secondary')};
  }

  ${IconStyle} {
    ${svgFill('tint', 'level1')};
  }
`

export default ShareButtonStyle
