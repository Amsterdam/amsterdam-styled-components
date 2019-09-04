import React from 'react'
import ListStyle, { Props } from './ListStyle'

const List: React.FC<Props & React.HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  return <ListStyle {...otherProps}>{children}</ListStyle>
}

export default List
