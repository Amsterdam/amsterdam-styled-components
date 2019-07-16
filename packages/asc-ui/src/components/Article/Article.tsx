import React from 'react'
import ArticleStyle from './ArticleStyle'
import BlogPost, { Props } from '../Blog/BlogPost/BlogPost'

const Article: React.FC<Props> = ({ children, image }) => (
  <BlogPost StyledComponent={ArticleStyle} image={image}>
    {children}
  </BlogPost>
)

export default Article
