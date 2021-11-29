import type { FunctionComponent, HTMLAttributes } from 'react'
import EditorialHeaderStyle from './EditorialHeaderStyle'
import Heading from '../../Heading/Heading'

export type Props = {
  title: string
} & HTMLAttributes<HTMLElement>

const EditorialHeader: FunctionComponent<Props> = ({
  title,
  children,
  ...otherProps
}) => (
  <EditorialHeaderStyle {...otherProps}>
    <Heading forwardedAs="h1">{title}</Heading>
    {children}
  </EditorialHeaderStyle>
)

export default EditorialHeader
