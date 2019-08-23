import styled from '@datapunt/asc-core'
import { color } from '../../../utils'

export type Props = {}

export default styled.article<Props>`
  flex: 1;
  background-color: ${color('tint', 'level1')};
`
