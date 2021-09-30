import type { FunctionComponent } from 'react'
import { DescriptionListWrapper } from './DescriptionListStyle'

const DescriptionList: FunctionComponent = ({ children, ...otherProps }) => (
  <DescriptionListWrapper {...otherProps}>{children}</DescriptionListWrapper>
)

export default DescriptionList
