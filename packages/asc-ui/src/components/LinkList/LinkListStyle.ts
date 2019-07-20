import styled from '@datapunt/asc-core'
import { color } from '../../utils'

export interface Props {
  className?: string
}

export default styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: ${color('tint', 'level1')};
`
