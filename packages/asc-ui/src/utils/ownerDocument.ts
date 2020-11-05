// See: https://github.com/typescript-eslint/typescript-eslint/issues/2715
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ownerDocument(node?: HTMLElement | null) {
  return node?.ownerDocument ?? window.document
}

export default ownerDocument
