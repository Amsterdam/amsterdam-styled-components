import type { HTMLAttributes } from 'react'
import EditorialSidebarStyle from './EditorialSidebarStyle'

function EditorialContent({
  children,
  ...otherProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <EditorialSidebarStyle {...otherProps}>{children}</EditorialSidebarStyle>
  )
}

export default EditorialContent
