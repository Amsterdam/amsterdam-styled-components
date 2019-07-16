import React from 'react'
import BlogPostStyle from './BlogPostStyle'
import BackgroundImage from '../../BackgroundImage'

export type Props = {
  StyledComponent?: any
  image?: string
}

const BlogPost: React.FC<Props> = ({ children, image, StyledComponent }) => (
  <StyledComponent hasImage={!!image}>
    {image && (
      <BackgroundImage
        aspectRatio={44}
        size="cover"
        position="top center"
        source={image}
      />
    )}
    {children}
  </StyledComponent>
)

BlogPost.defaultProps = {
  StyledComponent: BlogPostStyle,
}

export default BlogPost
