import styled from '../../styled-components'
import { flexboxMinHeightFix } from '../shared/ie-fixes'

type Props = {}

const TopBar = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  min-height: 54px;
  padding: 0 15px;

  ${flexboxMinHeightFix()}
`

export default TopBar
