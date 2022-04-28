import type { ReactNode } from 'react'
import { DescriptionListWrapper } from './DescriptionListStyle'

interface Props {
  children?: ReactNode
}

function DescriptionList({ children, ...otherProps }: Props) {
  return (
    <DescriptionListWrapper {...otherProps}>{children}</DescriptionListWrapper>
  )
}

export default DescriptionList
