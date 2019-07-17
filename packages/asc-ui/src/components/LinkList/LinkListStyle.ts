import styled from '@datapunt/asc-core'
import { color } from '../../utils'

export interface Props {
  inverted?: boolean
}

export default styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: ${({ inverted }) =>
    inverted ? color('tint', 'level5') : color('tint', 'level1')};
`
