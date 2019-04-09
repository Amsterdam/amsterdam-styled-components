import styled from 'styled-components'

const defaultBackgroundColor = '#fff'

export type Props = {
  backgroundColor?: string
}

const StyledTopBar = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  min-height: 54px;
  padding: 0 15px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : defaultBackgroundColor}
  
  // ie11 fix
  &:after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`

export default StyledTopBar


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
