import React from 'react'
import BlogPostStyle, { Props as BlogPostStyleProps } from './BlogPostStyle'
import BackgroundImage from '../../BackgroundImage'

type Props = {
  StyledComponent: any
} & BlogPostStyleProps

const BlogPost: React.FC<Props> = ({ children, image, StyledComponent }) => (
  <StyledComponent image={image}>
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
