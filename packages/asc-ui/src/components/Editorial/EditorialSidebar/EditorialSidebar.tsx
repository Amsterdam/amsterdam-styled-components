import type { FunctionComponent, HTMLAttributes } from 'react'
import EditorialSidebarStyle from './EditorialSidebarStyle'

const EditorialContent: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialSidebarStyle {...otherProps}>{children}</EditorialSidebarStyle>

export default EditorialContent
