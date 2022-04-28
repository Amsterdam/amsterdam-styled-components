import type { Props as ListItemStyleProps } from './ListItemStyle'
import ListItemStyle from './ListItemStyle'

type Props = ListItemStyleProps

function ListItem({ children, ...otherProps }: Props) {
  return <ListItemStyle {...otherProps}>{children}</ListItemStyle>
}

export default ListItem
