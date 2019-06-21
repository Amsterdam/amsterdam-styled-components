import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { color } from '../../utils'

type Props = {
  open: boolean
}

export default styled(IconButtonStyle)<Props>`
  height: 50px;
  width: 50px;
  background-color: ${({ open, theme }) =>
    color('tint', open ? 'level2' : 'level1')({ theme })};
`
