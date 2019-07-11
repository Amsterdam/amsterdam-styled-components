import React from 'react'
import BlogContentStyle from './BlogContentStyle'

const BlogContent: React.FC<{}> = ({ children }) => (
  <BlogContentStyle>{children}</BlogContentStyle>
)

export default BlogContent
