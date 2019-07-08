import React from 'react'
import LinkListStyle from './LinkListStyle'

const LinkList: React.FC<{}> = ({ children }) => {
  return <LinkListStyle>{children}</LinkListStyle>
}

export default LinkList
