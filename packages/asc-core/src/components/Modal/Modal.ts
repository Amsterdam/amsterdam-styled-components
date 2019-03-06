import styled from '../../styled-components'

type Props = {
  attributes?: object
}

const Modal = styled.div<Props>`
  background-color: #ffffff;
  z-index: 20;
  width: 100%;
  max-width: 620px;
  max-height: 75%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalContainer = styled.div.attrs(props => ({
  ...props,
}))`
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
`

export default Modal
