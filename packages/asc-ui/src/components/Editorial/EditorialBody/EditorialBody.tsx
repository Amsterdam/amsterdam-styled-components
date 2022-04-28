import type { HTMLAttributes } from 'react'
import EditorialBodyStyle from './EditorialBodyStyle'

function EditorialBody({
  children,
  ...otherProps
}: HTMLAttributes<HTMLElement>) {
  return <EditorialBodyStyle {...otherProps}>{children}</EditorialBodyStyle>
}

export default EditorialBody
