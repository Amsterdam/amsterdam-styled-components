import { position, transparentize } from 'polished'
import styled from '../../styled-components'

type Props = {
  backdropOpacity?: number
}

const BackDrop = styled.div<Props>`
  display: block;
  ${position('fixed', 0, 0, 0, 0)};
  background-color: ${props =>
    transparentize(props.backdropOpacity || 0.3, '#000000')};
  z-index: 10;
`

export default BackDrop
