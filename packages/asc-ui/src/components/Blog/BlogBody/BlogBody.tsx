import React from 'react'
import BlogBodyStyle, { Props } from './BlogBodyStyle'

const BlogBody: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <BlogBodyStyle {...otherProps}>{children}</BlogBodyStyle>

export default BlogBody
