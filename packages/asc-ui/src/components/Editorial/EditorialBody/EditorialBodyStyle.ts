import styled from 'styled-components'
import { themeColor } from '../../../utils'

export type Props = {}

export default styled.article<Props>`
  flex: 1;
  background-color: ${themeColor('tint', 'level1')};
`
