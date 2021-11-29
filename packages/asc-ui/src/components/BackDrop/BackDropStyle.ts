import { position, transparentize } from 'polished'
import styled from 'styled-components'
import { BACKDROP_Z_INDEX } from '../shared/constants'

import { themeColor } from '../../utils'

export interface Props {
  backdropOpacity?: number
  zIndexOffset?: number
}

const BackDropStyle = styled.div<Props>`
  display: block;
  ${position('fixed', 0, 0, 0, 0)};
  background-color: ${({ backdropOpacity, theme }) =>
    transparentize(
      backdropOpacity || 0.3,
      themeColor('tint', 'level7')({ theme }),
    )};
  z-index: ${({ zIndexOffset }) =>
    zIndexOffset ? BACKDROP_Z_INDEX + zIndexOffset : BACKDROP_Z_INDEX};

  & > * {
    pointer-events: none;
  }
`

export default BackDropStyle
