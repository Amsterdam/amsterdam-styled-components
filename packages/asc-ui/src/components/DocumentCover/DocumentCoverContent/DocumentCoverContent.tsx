import type { FunctionComponent, HTMLAttributes } from 'react'
import DocumentCoverContentStyle from './DocumentCoverContentStyle'

const DocumentCoverContent: FunctionComponent<HTMLAttributes<HTMLDivElement>> =
  ({ children }) => (
    <DocumentCoverContentStyle>{children}</DocumentCoverContentStyle>
  )

export default DocumentCoverContent
