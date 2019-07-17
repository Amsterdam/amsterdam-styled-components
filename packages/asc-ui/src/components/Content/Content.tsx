import React from 'react'
import ContentStyle, { Props as ContentStyleProps } from './ContentStyle'

export interface Props extends ContentStyleProps {
  StyledComponent?: any
}

const Content: React.FC<Props> = ({
  children,
  StyledComponent,
  ...otherProps
}) => <StyledComponent {...otherProps}>{children}</StyledComponent>

Content.defaultProps = {
  StyledComponent: ContentStyle,
}

export default Content
