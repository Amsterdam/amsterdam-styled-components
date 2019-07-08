import React from 'react'
import ArticleHeaderStyle from './ArticleHeaderStyle'
import Heading from '../../Typography/Heading'

export type Props = {
  title: string
}

const ArticleHeader: React.FC<Props> = ({ title, children }) => (
  <ArticleHeaderStyle>
    {title && <Heading as="h1">{title}</Heading>}
    {children}
  </ArticleHeaderStyle>
)

export default ArticleHeader
