import React from 'react'
import PublicationStyle from './PublicationStyle'

type Props = {}

const Publication: React.FC<Props> = ({ children }) => (
  <PublicationStyle>{children}</PublicationStyle>
)

export default Publication
