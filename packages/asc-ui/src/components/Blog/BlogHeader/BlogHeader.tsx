import React from 'react'
import BlogHeaderStyle from './BlogHeaderStyle'
import Heading from '../../Heading/Heading'

export type Props = {
  title: string
} & React.HTMLAttributes<HTMLElement>

const BlogHeader: React.FC<Props> = ({ title, children, className }) => (
  <BlogHeaderStyle className={className}>
    <Heading as="h1">{title}</Heading>
    {children}
  </BlogHeaderStyle>
)

export default BlogHeader
