import React from 'react'
import ReactDOM from 'react-dom'
import ownerDocument from '../../utils/ownerDocument'

export type Props = {
  element?: HTMLElement
  blurredNode?: HTMLElement
  hideOverFlow?: boolean
}

type State = {}

const mountElement = window.document.createElement('div')
mountElement.setAttribute('style', 'position: absolute;')

class Portal extends React.Component<Props, State> {
  static getOwnerDocument(element: React.ReactInstance) {
    // eslint-disable-next-line react/no-find-dom-node
    const el = ReactDOM.findDOMNode(element) as HTMLInputElement
    return ownerDocument(el)
  }

  mountEl: Element = mountElement

  componentDidMount(): void {
    this.setMountNode()
  }

  componentWillUnmount(): void {
    const { blurredNode } = this.props
    const el = this.element
    el.removeAttribute('style')
    if (blurredNode) {
      blurredNode.removeAttribute('style')
    }
    el.removeChild(this.mountEl)
  }

  setMountNode() {
    const { blurredNode, hideOverFlow = true } = this.props
    const el = this.element

    // Determines if the overflow should be hidden on the <body> element
    if (hideOverFlow) {
      el.setAttribute('style', 'overflow: hidden;')
    }

    el.appendChild(this.mountEl)
    if (blurredNode) {
      blurredNode.setAttribute('style', 'filter: blur(1px)')
    }
  }

  get element() {
    const { element } = this.props
    const { body } = Portal.getOwnerDocument(this)
    let el = body

    if (element) {
      el = element
    }
    return el
  }

  render() {
    const { children } = this.props
    return this.mountEl ? ReactDOM.createPortal(children, this.mountEl) : null
  }
}

export default Portal
