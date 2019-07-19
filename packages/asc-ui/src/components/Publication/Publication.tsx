import React from 'react'
import PublicationStyle from './PublicationStyle'
import { BlogPost } from '../Blog'

type Props = {}

const Publication: React.FC<Props> = ({ children }) => (
  <BlogPost StyledComponent={PublicationStyle}>{children}</BlogPost>
)

export default Publication
