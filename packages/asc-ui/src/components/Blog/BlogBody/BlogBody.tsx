import React from 'react'
import BlogBodyStyle, { Props } from './BlogBodyStyle'

const BlogBody: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
}) => <BlogBodyStyle className={className}>{children}</BlogBodyStyle>

export default BlogBody
