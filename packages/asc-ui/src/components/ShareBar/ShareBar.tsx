import React from 'react'
import { AscCore } from '../../styles'

const ShareBar: React.FC<{}> = ({ children }) => (
  <AscCore.ButtonBar padding={0}>{children}</AscCore.ButtonBar>
)

export default ShareBar
