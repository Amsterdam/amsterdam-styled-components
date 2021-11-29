import styled from 'styled-components'
import TopBarStyle from '../TopBar/TopBarStyle'
import { themeColor, showAboveBackDrop } from '../../utils'

interface Props {
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

export default ModalStyle
