import React, { ReactInstance } from 'react'
import ReactDOM from 'react-dom'
import ownerDocument from '../../utils/ownerDocument'

type Props = {}

type State = {}

class Portal extends React.Component<Props, State> {
  static getOwnerDocument(element: ReactInstance) {
    const el = ReactDOM.findDOMNode(element) as HTMLInputElement
    return ownerDocument(el)
  }

  mountEl: (Element) = window.document.createElement('div')

  constructor(props: Props) {
    super(props)
  }

  componentDidMount(): void {
    this.setMountNode()
  }

  componentWillUnmount(): void {
    const { body } = Portal.getOwnerDocument(this)
    body.removeChild(this.mountEl)
  }

  setMountNode() {
    const { body } = Portal.getOwnerDocument(this)
    body.appendChild(this.mountEl)
  }

  render() {
    const { children } = this.props
    return this.mountEl ? ReactDOM.createPortal(
      children,
      this.mountEl,
    ) : null
  }
}

export default Portal
