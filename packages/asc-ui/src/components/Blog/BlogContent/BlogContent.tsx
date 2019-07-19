import React from 'react'
import BlogContentStyle from './BlogContentStyle'

const BlogContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
}) => <BlogContentStyle className={className}>{children}</BlogContentStyle>

export default BlogContent
