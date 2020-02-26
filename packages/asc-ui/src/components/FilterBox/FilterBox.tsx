import React from 'react'
import styled from '@datapunt/asc-core'
import FilterBoxStyle, {
  FilterBoxHeader,
  Props as StyleProps,
} from './FilterBoxStyle'
import Heading from '../Heading'

type Props = {
  label: string
} & StyleProps

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`

const FilterBox: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  label,
  ...otherProps
}) => (
  <FilterBoxStyle {...otherProps}>
    <FilterBoxHeader>
      <StyledHeading forwardedAs="h3" color="primary">
        {label}
      </StyledHeading>
    </FilterBoxHeader>
    {children}
  </FilterBoxStyle>
)

export default FilterBox
