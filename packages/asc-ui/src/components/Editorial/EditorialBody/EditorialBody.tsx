import type { HTMLAttributes, FunctionComponent } from 'react'
import EditorialBodyStyle from './EditorialBodyStyle'

const EditorialBody: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialBodyStyle {...otherProps}>{children}</EditorialBodyStyle>

export default EditorialBody
