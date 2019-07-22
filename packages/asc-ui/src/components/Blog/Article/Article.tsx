import React from 'react'
import ArticleStyle from './ArticleStyle'
import { Props } from '../BlogPost/BlogPost'

const Article: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  image,
  ...otherProps
}) => (
  <ArticleStyle image={image} {...otherProps}>
    {children}
  </ArticleStyle>
)

export default Article
