import React from 'react'
import EditorialHeaderStyle from './EditorialHeaderStyle'
import Heading from '../../Heading/Heading'

export type Props = {
  title: string
} & React.HTMLAttributes<HTMLElement>

const EditorialHeader: React.FC<Props> = ({
  title,
  children,
  ...otherProps
}) => (
  <EditorialHeaderStyle {...otherProps}>
    <Heading as="h1">{title}</Heading>
    {children}
  </EditorialHeaderStyle>
)

export default EditorialHeader
