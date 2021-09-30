import styled from 'styled-components'
import type { FunctionComponent } from 'react'
import { themeSpacing, breakpoint, themeColor } from '../../utils'

const DescriptionListItemWrapper = styled.div`
  display: flex;
  padding: 10.5px 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${themeColor('tint', 'level4')};
  }

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    flex-direction: column;
  }
`

const DescriptionListTerm = styled.dt`
  margin-right: ${themeSpacing(2)};
  color: ${themeColor('tint', 'level5')};
  font-weight: 500;
  white-space: normal;
  word-break: break-word;

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    width: 30%;
  }
`

const DescriptionListDescription = styled.dd`
  white-space: normal;
  width: 70%;
`

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
