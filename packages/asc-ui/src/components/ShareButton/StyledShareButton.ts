import styled from '../../styled-components'
import { AscCore } from '../..'
import { getColorFromTheme } from '../../styles/utils'

const StyledShareButton = styled(AscCore.Button.IconButton)<
  AscCore.Button.Props
>`
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

export default StyledShareButton
