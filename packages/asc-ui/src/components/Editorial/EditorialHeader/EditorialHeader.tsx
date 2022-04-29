import type { HTMLAttributes } from 'react'
import EditorialHeaderStyle from './EditorialHeaderStyle'
import Heading from '../../Heading/Heading'

export type Props = {
  title: string
} & HTMLAttributes<HTMLElement>

function EditorialHeader({ title, children, ...otherProps }: Props) {
  return (
    <EditorialHeaderStyle {...otherProps}>
      <Heading forwardedAs="h1">{title}</Heading>
      {children}
    </EditorialHeaderStyle>
  )
}

export default EditorialHeader
