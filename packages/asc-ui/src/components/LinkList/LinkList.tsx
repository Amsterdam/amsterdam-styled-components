import React from 'react'
import LinkListStyle, { Props as LinkListStyleProps } from './LinkListStyle'

export interface Props extends LinkListStyleProps {}

const LinkList: React.FC<Props> = ({ children, ...otherProps }) => {
  return <LinkListStyle {...otherProps}>{children}</LinkListStyle>
}

export default LinkList
