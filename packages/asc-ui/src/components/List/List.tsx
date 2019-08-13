import React from 'react'
import ListStyle, { ListStyleProps } from './ListStyle'

export interface Props extends ListStyleProps {}

const List: React.FC<Props> = ({ children, ...otherProps }) => {
  return <ListStyle {...otherProps}>{children}</ListStyle>
}

export default List
