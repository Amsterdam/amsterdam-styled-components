import styled from '@datapunt/asc-core'
import { color } from '../../utils'

export type Props = {
  image?: string
}

export default styled.article<Props>`
  width: 100%;
  margin: 0 auto;
  color: ${color('tint', 'level6')};
  background-color: ${color('tint', 'level1')};
`
