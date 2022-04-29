import type { HTMLAttributes } from 'react'
import type { Props } from './ListStyle'
import ListStyle from './ListStyle'

function List({
  children,
  ...otherProps
}: Props & HTMLAttributes<HTMLUListElement>) {
  return <ListStyle {...otherProps}>{children}</ListStyle>
}

export default List
