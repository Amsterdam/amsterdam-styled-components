import React from 'react'
import ListItemStyle, { ListItemStyleProps } from './ListItemStyle'

type Props = ListItemStyleProps

const ListItem: React.FC<Props> = ({ children, className }) => (
  <ListItemStyle {...{ className }}>{children}</ListItemStyle>
)

export default ListItem
