import styled from '@datapunt/asc-core'
import { color } from '../../utils'

export type Props = {}

export default styled.article<Props>`
  width: 100%;
  margin: 54px auto 72px auto;
  color: ${color('tint', 'level6')};
  background-color: ${color('tint', 'level1')};
`
