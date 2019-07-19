import React from 'react'
import BlogSidebarStyle from './BlogSidebarStyle'

const BlogContent: React.FC<{}> = ({ children }) => (
  <BlogSidebarStyle>{children}</BlogSidebarStyle>
)

export default BlogContent
