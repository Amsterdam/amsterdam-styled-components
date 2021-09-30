import styled from 'styled-components'
import type { FunctionComponent } from 'react'

const DescriptionListWrapper = styled.dl`
  width: 100%;
  margin-top: 0;
`

const DescriptionList: FunctionComponent = ({ children, ...otherProps }) => (
  <DescriptionListWrapper {...otherProps}>{children}</DescriptionListWrapper>
)

export default DescriptionList
