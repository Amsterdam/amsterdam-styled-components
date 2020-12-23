import { FunctionComponent, HTMLAttributes } from 'react'
import ArticleStyle from './ArticleStyle'
import { Props } from '../EditorialPost/EditorialPost'

const Article: FunctionComponent<Props & HTMLAttributes<HTMLElement>> = ({
  children,
  image,
  ...otherProps
}) => (
  <ArticleStyle image={image} {...otherProps}>
    {children}
  </ArticleStyle>
)

export default Article
