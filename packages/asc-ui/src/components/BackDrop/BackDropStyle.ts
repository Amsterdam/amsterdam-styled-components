import { position, transparentize } from 'polished'
import styled from '@datapunt/asc-core'
import { BACKDROP_Z_INDEX } from '../shared/constants'

type Props = {
  backdropOpacity?: number
}

const BackDropStyle = styled.div<Props>`
  display: block;
  ${position('fixed', 0, 0, 0, 0)};
  background-color: ${props =>
    transparentize(props.backdropOpacity || 0.3, '#000000')};
  transition: opacity 0.2s ease-in;
  opacity: 1;
  z-index: ${BACKDROP_Z_INDEX};
  width: 100vw;
  height: 100vh;
`

export default BackDropStyle
