import styled from 'styled-components'
import IconStyle from '../../Icon/IconStyle'
import { themeColor, svgFill } from '../../../utils'
import ButtonStyle, { Props as ButtonProps } from '../ButtonStyle'

export type Props = {
  hoverColor?: string
} & ButtonProps

const ShareButtonStyle = styled(ButtonStyle)<Props>`
  padding: 0;
  position: relative;
  justify-content: center;
  background: ${themeColor('tint', 'level5')};

  &:focus,
  &:hover {
    background: ${({ hoverColor }) => hoverColor || themeColor('secondary')};
  }

  ${IconStyle} {
    ${svgFill('tint', 'level1')};
  }
`

export default ShareButtonStyle
