import styled from '../../styled-components'
import Button from '../Button'
import { getColorFromTheme } from '../../utils'

export type Props = Button.Props

const ShareButtonStyle = styled(Button.IconButton)<Props>`
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
