import React from 'react'
import BlogStyle, { Props as StyleProps } from './BlogStyle'
import BackgroundImage from '../BackgroundImage'

type Props = {} & StyleProps

const Blog: React.FC<Props> = ({ children, image }) => (
  <BlogStyle image={image}>
    {image && (
      <BackgroundImage
        aspectRatio={44}
        size="cover"
        position="top center"
        source={image}
      />
    )}
    {children}
  </BlogStyle>
)

export default Blog
