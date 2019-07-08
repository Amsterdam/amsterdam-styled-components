import React from 'react'
import ArticleSidebarStyle from './ArticleSidebarStyle'

const ArticleContent: React.FC<{}> = ({ children }) => (
  <ArticleSidebarStyle>{children}</ArticleSidebarStyle>
)

export default ArticleContent
