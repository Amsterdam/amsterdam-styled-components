import type { ReactInstance } from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import ownerDocument from '../../utils/ownerDocument'

export interface Props {
  element?: HTMLElement
  blurredNode?: HTMLElement
  hideOverFlow?: boolean
}

let mountElement: Element | null = null
if (typeof window !== 'undefined') {
  mountElement = window.document.createElement('div')
  mountElement.setAttribute('style', 'position: absolute;')
}

class Portal extends Component<Props> {
  static getOwnerDocument(element: ReactInstance) {
    // eslint-disable-next-line react/no-find-dom-node
    const el = ReactDOM.findDOMNode(element) as HTMLInputElement
    return ownerDocument(el)
  }

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

    // check if the Portal is still active, in case there are multiple Portals mounted and unmounted
    if (mountElement && mountElement.parentNode === el) {
      el.removeChild(mountElement)
    }
  }

  setMountNode() {
    const { blurredNode, hideOverFlow = true } = this.props
    const el = this.element

    // Determines if the overflow should be hidden on the <body> element
    if (hideOverFlow) {
      el.setAttribute('style', 'overflow: hidden;')
    }

    if (mountElement) {
      el.appendChild(mountElement)
    }
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
    return mountElement ? ReactDOM.createPortal(children, mountElement) : null
  }
}

export default Portal
