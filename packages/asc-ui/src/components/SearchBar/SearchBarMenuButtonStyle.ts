import styled from '@datapunt/asc-core'
import { color, focusStyle } from '../../utils'

interface Props {
  open: boolean
}

const SearchBarMenuButtonStyle = styled.button<Props>`
  ${focusStyle()}
  background-color: ${({ open, theme }) =>
    open
      ? color('tint', 'level5')({ theme })
      : color('tint', 'level1')({ theme })};
`

export default SearchBarMenuButtonStyle
