function ownerDocument(node?: HTMLElement | null) {
  return node?.ownerDocument || window.document
}

export default ownerDocument
