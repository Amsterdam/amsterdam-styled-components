import styled from 'styled-components'
import { themeColor } from '../../../utils'

export type Props = {}

export default styled.div<Props>`
  background-color: ${themeColor('tint', 'level1')};
`
