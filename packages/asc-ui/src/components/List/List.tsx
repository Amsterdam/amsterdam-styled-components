import React, { FunctionComponent } from 'react'
import ListStyle, { Props } from './ListStyle'

const List: FunctionComponent<
  Props & React.HTMLAttributes<HTMLUListElement>
> = ({ children, ...otherProps }) => {
  return <ListStyle {...otherProps}>{children}</ListStyle>
}

export default List
