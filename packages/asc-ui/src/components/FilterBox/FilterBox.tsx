import React from 'react'
import styled from '@datapunt/asc-core'
import { Enlarge } from '@datapunt/asc-assets'
import FilterBoxStyle, {
  FilterBoxHeader,
  Props as StyleProps,
} from './FilterBoxStyle'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'

type Props = {
  label: string
  subLabel?: string
  showMoreLabel?: string
} & StyleProps

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 0;
`

const FilterBox: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  label,
  subLabel,
  showMoreLabel,
  ...otherProps
}) => (
  <FilterBoxStyle {...otherProps}>
    <FilterBoxHeader>
      <StyledHeading $as="h3" color="primary">
        {label}
      </StyledHeading>
      {subLabel && <StyledParagraph>{subLabel}</StyledParagraph>}
    </FilterBoxHeader>
    {children}
    {showMoreLabel && (
      <Button variant="application" iconLeft={<Enlarge />} iconSize={10}>
        {showMoreLabel}
      </Button>
    )}
  </FilterBoxStyle>
)

export default FilterBox
