import React from 'react'
import ArticleContentStyle from './ArticleContentStyle'

const ArticleContent: React.FC<{}> = ({ children }) => (
  <ArticleContentStyle>{children}</ArticleContentStyle>
)

export default ArticleContent
