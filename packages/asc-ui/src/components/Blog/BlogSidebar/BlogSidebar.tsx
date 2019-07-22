import React from 'react'
import BlogSidebarStyle from './BlogSidebarStyle'

const BlogContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <BlogSidebarStyle {...otherProps}>{children}</BlogSidebarStyle>

export default BlogContent
