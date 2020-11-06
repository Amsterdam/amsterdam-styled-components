import styled from 'styled-components'
import { position } from 'polished'
import Focus from '../Focus'
import TopBarStyle from '../TopBar/TopBarStyle'
import { themeColor, showAboveBackDrop } from '../../utils'

type Props = {
  hasBackDrop?: boolean
  zIndexOffset?: number
}

const ModalStyle = styled.div<Props>`
  background-color: ${themeColor('tint', 'level1')};
  overflow: auto;
  width: 100%;
  max-width: 620px;
  max-height: 75%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: all;

  ${TopBarStyle} {
    min-height: 54px;
  }

  ${showAboveBackDrop(true)}
`

export const ModalFocus = styled(Focus)`
  ${position('fixed', 0, 0, 0, 0)};
  pointer-events: none;
  ${showAboveBackDrop(true)}
`

export const ModalStyleContainer = styled.div`
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
  pointer-events: none;
`

export default ModalStyle
