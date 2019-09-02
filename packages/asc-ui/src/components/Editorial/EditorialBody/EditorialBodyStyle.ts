import styled from '@datapunt/asc-core'
import { themeColor } from '../../../utils'

export type Props = {}

export default styled.article<Props>`
  flex: 1;
  background-color: ${themeColor('tint', 'level1')};
`
