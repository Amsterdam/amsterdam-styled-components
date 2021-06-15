import { FunctionComponent, HTMLAttributes } from 'react'
import ListStyle, { Props } from './ListStyle'

const List: FunctionComponent<Props & HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  return <ListStyle {...otherProps}>{children}</ListStyle>
}

export default List
