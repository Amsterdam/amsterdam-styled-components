import React from 'react'
import { BackdropStyled, ModalStyled } from '@datapunt/asc-core'
import Portal from '../Portal/Portal'

type Props = {
  open: boolean,
  onClose?: Function,
  disablePortal?: boolean,
  disableBackdrop?: boolean,
  backdropOpacity?: number,
}

type State = {}

class Modal extends React.Component<Props, State> {
  static defaultProps = {
    disablePortal: false,
    disableBackdrop: false,
    backdropOpacity: 0.2,
  }

  myRef = React.createRef<HTMLDivElement>()

  // handleKey = (event: React.KeyboardEvent) => {
  //   if (event.keyCode === 27) {
  //     this.setState({
  //       open: false,
  //     })
  //   }
  // }

  componentDidMount() {
    this.focus()
    // @ts-ignore
    // window.addEventListener('keydown', this.handleKey, false)
  }

  componentDidUpdate() {
    this.focus()
  }

  componentWillUnmount() {
    // @ts-ignore
    // window.removeEventListener('keydown', this.handleKey, false)
  }

  handleClose = () => {
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
  }

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      this.handleClose()
    }
  }

  focus = () => {
    const { current: node } = this.myRef
    if (node) {
      node.focus()
    }
  }

  render() {
    const {
      open, disablePortal, children, backdropOpacity, ...other
    } = this.props
    const Element = disablePortal ? 'div' : Portal

    return open ? (
      <Element>
        <div role="presentation" onKeyDown={this.handleKeyDown} ref={this.myRef} tabIndex={0}>
          <ModalStyled.ModalContainer {...other}>
            <BackdropStyled.default backdropOpacity={backdropOpacity} onClick={this.handleClose} />
            <ModalStyled.default>
              {children}
            </ModalStyled.default>
          </ModalStyled.ModalContainer>
        </div>
      </Element>
    ) : null
  }
}

export default Modal
