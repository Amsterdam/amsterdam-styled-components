import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { color } from '../../utils'

const BUTTON_SIZE = 50

type Props = {
  open: boolean
  size?: number
}
export default styled(IconButtonStyle)<Props>`
  height: ${({ size = BUTTON_SIZE }) => `${size}px`};
  width: ${({ size = BUTTON_SIZE }) => `${size}px`};
  background-color: ${({ open, theme }) =>
    color('tint', open ? 'level2' : 'level1')({ theme })};

  &:hover,
  &:focus {
    background-color: ${color('tint', 'level2')};
  }
`
