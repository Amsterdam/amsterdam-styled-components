import React, { FunctionComponent } from 'react'
import ArticleStyle from './ArticleStyle'
import { Props } from '../EditorialPost/EditorialPost'

const Article: FunctionComponent<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  image,
  ...otherProps
}) => (
  <ArticleStyle image={image} {...otherProps}>
    {children}
  </ArticleStyle>
)

export default Article
