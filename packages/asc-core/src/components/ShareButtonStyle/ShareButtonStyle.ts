import styled from '../../styled-components'
import IconButtonStyle, {
  Props as IconButtonStyleProps,
} from '../IconButtonStyle'
import { getColorFromTheme } from '../../utils'

export type Props = IconButtonStyleProps

const ShareButtonStyle = styled(IconButtonStyle)<Props>`
  padding: 0px;
  position: relative;
  justify-content: center;
  background: ${({ theme }) => getColorFromTheme(theme, 'tint', 'level5')}};

  &:focus,
  &:hover {
    background: ${({ hoverColor, theme }) =>
      hoverColor || getColorFromTheme(theme, 'secondary')};
  }
`

export default ShareButtonStyle
