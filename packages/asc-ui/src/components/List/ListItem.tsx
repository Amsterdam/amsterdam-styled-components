import type { FunctionComponent } from 'react'
import type { Props as ListItemStyleProps } from './ListItemStyle'
import ListItemStyle from './ListItemStyle'

type Props = ListItemStyleProps

const ListItem: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <ListItemStyle {...otherProps}>{children}</ListItemStyle>
)

export default ListItem
