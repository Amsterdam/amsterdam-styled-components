import React from 'react'
import styled from 'styled-components'
import FilterBoxStyle, {
  FilterBoxHeader,
  Props as StyleProps,
} from './FilterBoxStyle'
import Heading from '../Heading'
import { themeColor } from '../../utils/themeUtils'

type Props = {
  label: string
} & StyleProps

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  color: ${themeColor('primary', 'main')};
`

const FilterBox: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  label,
  ...otherProps
}) => (
  <FilterBoxStyle {...otherProps}>
    <FilterBoxHeader>
      <StyledHeading forwardedAs="h3">{label}</StyledHeading>
    </FilterBoxHeader>
    {children}
  </FilterBoxStyle>
)

export default FilterBox
