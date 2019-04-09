import React from 'react'
import ButtonBar from '../ButtonBar'
import { Props } from '../ButtonBar/StyledButtonBar'

const ShareBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <ButtonBar {...otherProps}>{children}</ButtonBar>
)

export default ShareBar
