import type { FunctionComponent } from 'react'
import {
  DescriptionListItemWrapper,
  DescriptionListTerm,
  DescriptionListDescription,
} from './DescriptionListStyle'

export interface DescriptionListItemProps {
  term: string
}

const DescriptionListItem: FunctionComponent<DescriptionListItemProps> = ({
  term,
  children,
  ...otherProps
}) => {
  return (
    <DescriptionListItemWrapper {...otherProps}>
      <DescriptionListTerm>{term}</DescriptionListTerm>
      <DescriptionListDescription>{children}</DescriptionListDescription>
    </DescriptionListItemWrapper>
  )
}
export default DescriptionListItem
