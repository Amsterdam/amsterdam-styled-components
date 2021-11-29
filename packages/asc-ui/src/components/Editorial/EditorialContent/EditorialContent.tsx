import type { FunctionComponent, HTMLAttributes } from 'react'
import EditorialContentStyle from './EditorialContentStyle'

const EditorialContent: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialContentStyle {...otherProps}>{children}</EditorialContentStyle>

export default EditorialContent
