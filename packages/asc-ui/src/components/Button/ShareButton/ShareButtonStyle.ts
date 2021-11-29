import styled from 'styled-components'
import { svgFill, themeColor } from '../../../utils'
import IconStyle from '../../Icon/IconStyle'
import type { ButtonStyleProps } from '../ButtonStyle'
import ButtonStyle from '../ButtonStyle'

export type Props = {
  hoverColor?: string
} & ButtonStyleProps

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
    ${svgFill(themeColor('tint', 'level1'))};
  }
`

export default ShareButtonStyle
