import styled from '../../styled-components'

type Props = {
  attributes?: object,
}

const Modal = styled.div<Props>`
  background-color: #ffffff;
  z-index: 10;
  width: 100%;
  max-width: 670px;
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
