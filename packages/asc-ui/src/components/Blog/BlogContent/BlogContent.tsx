import React from 'react'
import BlogContentStyle from './BlogContentStyle'

const BlogContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <BlogContentStyle {...otherProps}>{children}</BlogContentStyle>

export default BlogContent
