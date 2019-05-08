import styled from '../../styled-components'
import IconButtonStyle, { IconButtonStyleProps } from '../IconButtonStyle'
import { color } from '../../utils'

export type Props = IconButtonStyleProps

const ShareButtonStyle = styled(IconButtonStyle)<Props>`
  padding: 0px;
  position: relative;
  justify-content: center;
  background: ${color('tint', 'level5')}};

  &:focus,
  &:hover {
    background: ${({ hoverColor }) => hoverColor || color('secondary')};
  }
`

export default ShareButtonStyle
