import { AscCore } from '@datapunt/asc-core'
import styled from '../../styled-components'
import { getThemeColor } from '../../core/AscCoreUtils'

const StyledShareButton = styled(AscCore.Button.IconButton)<
  AscCore.Button.Props
>`
  padding: 0px;
  position: relative;
  justify-content: center;
  background: ${({ theme }) => getThemeColor(theme, 'tint', 'level5')}};

  &:focus,
  &:hover {
    background: ${({ hoverColor, theme }) =>
      hoverColor || getThemeColor(theme, 'secondary')};
  }
`

export default StyledShareButton
