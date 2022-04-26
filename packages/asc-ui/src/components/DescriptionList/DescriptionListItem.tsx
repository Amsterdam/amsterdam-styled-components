import { useMemo } from 'react'
import {
  DescriptionListItemWrapper,
  DescriptionListTerm,
  DescriptionListDescription,
} from './DescriptionListStyle'

export interface DescriptionListItemProps {
  term: string
}

function DescriptionListItem({
  term,
  children,
  ...otherProps
}: DescriptionListItemProps) {
  const description = useMemo(
    () =>
      /* eslint-disable-next-line no-nested-ternary */
      Array.isArray(children)
        ? children.filter((value: any) => !!value).length
          ? children
          : '-'
        : children || '-',
    [children],
  )
  return (
    <DescriptionListItemWrapper {...otherProps}>
      <DescriptionListTerm>{term}</DescriptionListTerm>
      <DescriptionListDescription>{description}</DescriptionListDescription>
    </DescriptionListItemWrapper>
  )
}
export default DescriptionListItem
