import styled from '@datapunt/asc-core'
import { color } from '../../../utils'

export type Props = {
  image?: string
}

export default styled.article<Props>`
  background-color: ${color('tint', 'level1')};
`
