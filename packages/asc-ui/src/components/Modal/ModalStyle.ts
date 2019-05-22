import styled from '@datapunt/asc-core'
import TopBarStyle from '../TopBar/TopBarStyle'
import { color } from '../../utils'

type Props = {
  attributes?: object
}

const ModalStyle = styled.div<Props>`
  background-color: ${color('tint', 'level1')};
  overflow: auto;
  z-index: 20;
  width: 100%;
  max-width: 620px;
  max-height: 75%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${TopBarStyle} {
    min-height: 54px;
  }
`

export const ModalStyleContainer = styled.div.attrs(props => ({
  ...props,
}))`
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
`

export default ModalStyle
