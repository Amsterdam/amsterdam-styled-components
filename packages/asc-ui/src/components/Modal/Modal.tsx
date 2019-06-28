import React from 'react'
import Portal, { Props as PortalProps } from '../Portal/Portal'
import Focus from '../Focus'
import ModalStyle, { ModalStyleContainer } from './ModalStyle'
import BackDropStyle from '../BackDrop/BackDropStyle'
import { KeyboardKeys } from '../../types'

export type Props = {
  open: boolean
  onClose?: Function
  disablePortal?: boolean
  backdropOpacity?: number
  blurredNode?: Element
} & PortalProps

type State = {}

class Modal extends React.Component<Props, State> {
  static defaultProps = {
    disablePortal: false,
  }

  renderedTimer: number = 0

  myRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    this.focus()
  }

  componentDidUpdate() {
    this.focus()
  }

  componentWillUnmount(): void {
    clearTimeout(this.renderedTimer)
  }

  handleClose = () => {
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
  }

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === KeyboardKeys.Escape) {
      event.stopPropagation()
      this.handleClose()
    }
  }

  focus = () => {
    const { current: node } = this.myRef
    if (node) {
      clearTimeout(this.renderedTimer)
      this.renderedTimer = setTimeout(() => {
        node.focus()
      })
    }
  }

  render() {
    const {
      open,
      disablePortal,
      children,
      backdropOpacity,
      element,
      blurredNode,
      ...other
    } = this.props
    const Element = disablePortal ? 'div' : Portal

    return open ? (
      <Element {...(!disablePortal ? { element, blurredNode } : {})}>
        <Focus onKeyDown={this.handleKeyDown}>
          <ModalStyleContainer {...other}>
            <BackDropStyle
              backdropOpacity={backdropOpacity}
              onClick={this.handleClose}
            />
            <ModalStyle>{children}</ModalStyle>
          </ModalStyleContainer>
        </Focus>
      </Element>
    ) : null
  }
}

export default Modal
