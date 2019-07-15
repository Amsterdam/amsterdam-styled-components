import React from 'react'
import BlogBodyStyle, { Props } from './BlogBodyStyle'

const BlogBody: React.FC<Props> = ({ children }) => (
  <BlogBodyStyle>{children}</BlogBodyStyle>
)

export default BlogBody
