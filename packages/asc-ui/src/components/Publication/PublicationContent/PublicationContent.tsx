import React from 'react'
import PublicationContentStyle from './PublicationContentStyle'

const PublicationContent: React.FC<{}> = ({ children }) => (
  <PublicationContentStyle>{children}</PublicationContentStyle>
)

export default PublicationContent
