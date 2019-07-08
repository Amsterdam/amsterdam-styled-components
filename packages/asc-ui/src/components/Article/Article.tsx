import React from 'react'
import ArticleStyle, { Props as StyleProps } from './ArticleStyle'
import BackgroundImage from '../BackgroundImage'

type Props = {} & StyleProps

const Article: React.FC<Props> = ({ children, image }) => (
  <ArticleStyle image={image}>
    {image && (
      <BackgroundImage
        aspectRatio={44}
        size="cover"
        position="top center"
        src={image}
      />
    )}
    {children}
  </ArticleStyle>
)

export default Article
