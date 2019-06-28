function ownerDocument(node: HTMLElement) {
  return (node && node.ownerDocument) || window.document
}

export default ownerDocument
