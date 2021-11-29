import type { FunctionComponent, HTMLAttributes } from 'react'
import type { Props } from './ListStyle'
import ListStyle from './ListStyle'

const List: FunctionComponent<Props & HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  return <ListStyle {...otherProps}>{children}</ListStyle>
}

export default List
