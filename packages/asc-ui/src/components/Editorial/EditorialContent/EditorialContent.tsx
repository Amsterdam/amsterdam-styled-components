import type { HTMLAttributes } from 'react'
import EditorialContentStyle from './EditorialContentStyle'

function EditorialContent({
  children,
  ...otherProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <EditorialContentStyle {...otherProps}>{children}</EditorialContentStyle>
  )
}

export default EditorialContent
