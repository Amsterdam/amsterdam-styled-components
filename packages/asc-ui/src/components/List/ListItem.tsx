import React from 'react'
import ListItemStyle, { ListItemStyleProps } from './ListItemStyle'

type Props = ListItemStyleProps

const ListItem: React.FC<Props> = ({ children, ...otherProps }) => (
  <ListItemStyle {...{ ...otherProps }}>{children}</ListItemStyle>
)

export default ListItem
