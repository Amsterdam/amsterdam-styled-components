function ownerDocument(node: HTMLInputElement) {
  return (node && node.ownerDocument) || window.document
}

export default ownerDocument
