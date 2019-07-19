import React from 'react'
import BlogHeaderStyle from './BlogHeaderStyle'
import Heading from '../../Typography/Heading'

export type Props = {
  title: string
}

const BlogHeader: React.FC<Props> = ({ title, children }) => (
  <BlogHeaderStyle>
    <Heading as="h1">{title}</Heading>
    {children}
  </BlogHeaderStyle>
)

export default BlogHeader
