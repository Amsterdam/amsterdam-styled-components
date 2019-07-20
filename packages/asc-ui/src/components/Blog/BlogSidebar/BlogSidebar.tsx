import React from 'react'
import BlogSidebarStyle from './BlogSidebarStyle'

const BlogContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
}) => <BlogSidebarStyle className={className}>{children}</BlogSidebarStyle>

export default BlogContent
