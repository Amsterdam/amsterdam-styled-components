import { DescriptionListWrapper } from './DescriptionListStyle'

function DescriptionList({ children, ...otherProps }) {
  return (
    <DescriptionListWrapper {...otherProps}>{children}</DescriptionListWrapper>
  )
}

export default DescriptionList
