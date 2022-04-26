import styled from 'styled-components'
import type { HTMLAttributes } from 'react'
import FilterBoxStyle, { FilterBoxHeader } from './FilterBoxStyle'
import Heading from '../Heading'
import { themeColor } from '../../utils/themeUtils'

interface Props {
  label: string
}

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  color: ${themeColor('primary', 'main')};
`

function FilterBox({
  children,
  label,
  ...otherProps
}: Props & HTMLAttributes<HTMLElement>) {
  return (
    <FilterBoxStyle {...otherProps}>
      <FilterBoxHeader>
        <StyledHeading forwardedAs="h3">{label}</StyledHeading>
      </FilterBoxHeader>
      {children}
    </FilterBoxStyle>
  )
}

export default FilterBox
