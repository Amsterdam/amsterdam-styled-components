import type { HTMLAttributes } from 'react'
import ArticleStyle from './ArticleStyle'
import type { Props } from '../EditorialPost/EditorialPost'

function Article({
  children,
  image,
  ...otherProps
}: Props & HTMLAttributes<HTMLElement>) {
  return (
    <ArticleStyle image={image} {...otherProps}>
      {children}
    </ArticleStyle>
  )
}

export default Article
