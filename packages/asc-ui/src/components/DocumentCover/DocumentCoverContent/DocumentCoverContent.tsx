import type { HTMLAttributes } from 'react'
import DocumentCoverContentStyle from './DocumentCoverContentStyle'

function DocumentCoverContent({ children }: HTMLAttributes<HTMLDivElement>) {
  return <DocumentCoverContentStyle>{children}</DocumentCoverContentStyle>
}

export default DocumentCoverContent
