import React from 'react'
import StyledButtonBar from './StyledButtonBar'

const ButtonBar: React.FC<{}> = ({ children }) => (
  <StyledButtonBar padding={0}>{children}</StyledButtonBar>
)

export default ButtonBar
